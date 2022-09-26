const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');

// Register route
router.post("/register", async (req, res) => {
    try {
        // get user info
        const { userName, userEmail, password } = req.body;

        console.log(userName, userEmail, password)

        // ---- Check if user already exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [userEmail])

        // ---- if user exists show error
        if (user.rows.length !== 0) {
            return res.status(403).send("User already exists");
        }

        // ---- if user doesnt exist encrypt password and add to table

        const saltRounds = 10;
        const salt = bcrypt.genSalt(saltRounds, function(err, salt){
            if(err){console.log(err)}
            const bcryptPassword = await bcrypt.hash(password, salt, function (err, hash) {
                if (err) { console.log(err) }
                return console.log(hash)
            });
        });
        console.log("test 4")
        // Add user to table
        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)",
            [userName, userEmail, bcryptPassword])
        console.log("user added")
        res.status(200).json(newUser);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;