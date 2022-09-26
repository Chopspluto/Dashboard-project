const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');

router.get("/", authorization, async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user]);

        res.json(users)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

module.exports = router;