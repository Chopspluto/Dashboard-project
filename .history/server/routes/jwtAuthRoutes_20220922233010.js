const express = require('express');
const router = express.Router();
const pool = require('../db');

// Register route
router.post("/register", async(req, res) => {
    try {
        // get user info
        const {userName, userEmail, password} = req.body;

        // Check if user already exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [userEmail])
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;