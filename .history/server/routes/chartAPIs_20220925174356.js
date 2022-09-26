const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');

// GET USERS
router.get("/users", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT * FROM users");
        res.json(usersData.rows)
        console.log(usersData)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;