const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../db');

// Register route
router.post("/register", async (req, res) => {
    try {
        // get user info
        const getNewUser = { 
            userName: req.body.user_name, 
            userEmail: req.body.user_email, 
            password: req.body.user_password }

        console.log(userName, userEmail, password)

        // ---- Check if user already exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [getNewUser.])

        // ---- if user exists show error
        if (user.rows.length !== 0) {
            return res.status(403).send("User already exists");
        }

        else {// ---- if user doesnt exist encrypt password and add to table
            console.log("test 1")
            const saltRounds = 10;
            console.log("test 2")
            const salt = bcrypt.genSalt(saltRounds);
            console.log("test 3")
            const bcryptPassword = await bcrypt.hash(password, salt, function (err, hash) {
                if (err) { console.log(err) }
                return console.log(hash)
            });
            console.log("test 4")
            // Add user to table
            const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)",
                [userName, userEmail, bcryptPassword])
            console.log("user added")
            res.status(200).json(newUser);
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;