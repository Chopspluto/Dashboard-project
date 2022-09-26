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
router.get("/users/registerbymonth", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT order_month FROM users");
        res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// select users living in sri lanka
router.get("/users/registerbymonth", authorization, async (req, res) => {
    try {
        const usersData = await pool.query("SELECT * FROM users WHERE ");
        res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;