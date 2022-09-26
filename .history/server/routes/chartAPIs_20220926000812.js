const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');

// GET USERS
router.get("/users", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT * FROM users");
        res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// filter user registration by month
router.get("/users", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT EXTRACT(MONTH FROM TIMESTAMP '2016-12-31 13:30:15')");
        res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;