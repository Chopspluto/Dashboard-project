const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInput');
const authorization = require('../middleware/authorisation')

// * Register route
// * PUBLIC
router.post("/register", validInfo, async (req, res) => {
    try {
        // get user info
        const { name, email, password, location, product_1, product_1_price } = req.body;

        // ---- Check if user already exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])

        // ---- if user exists show error
        if (user.rows.length !== 0) {
            return res.status(403).send("User already exists");
        }

        // ---- if user doesnt exist encrypt password and add to table
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const bcryptPassword = await bcrypt.hashSync(password, salt);

        // Add user to table
        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, bcryptPassword])

        // Create JWT token
        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({ token })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});


// * LOGIN route
// * PUBLIC
router.post("/login", validInfo, async (req, res) => {
    try {
        //Get user info
        const { email, password } = req.body;

        // check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])
        if (user.rows.length === 0) {
            return res.status(404).send("User does not exist")
        }

        // compare passwords
        const validPasword = await bcrypt.compare(password, user.rows[0].user_password);
        if (!validPasword) {
            return res.status(401).send("Password or email is incorrect")
        }
        // generate jwt token
        const token = jwtGenerator(user.rows[0].user_id);
        res.status(200).json({ token })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

// ** PRIVATE ROUTES
//  to check if token is valid
router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;