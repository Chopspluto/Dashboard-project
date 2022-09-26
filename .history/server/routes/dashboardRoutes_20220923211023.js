const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');

// Dashboard Routes
router.get("/", authorization, async (req, res) => {
    try {
        const users = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);

        res.json(users.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;