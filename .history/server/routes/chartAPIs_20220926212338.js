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
router.get("/users/registerbymonth", async (req, res) => {
    try {
        const usersData = await pool.query("SELECT order_month FROM users");
        return res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// select products
router.get("/users/location", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT * FROM users WHERE user_location='Malaysia'");
        res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;