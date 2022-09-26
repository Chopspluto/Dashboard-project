const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET USERS
router.get("/users", async (req, res) => {
    try {
        const usersData = await pool.query("SELECT * FROM users");
        res.json(usersData.rows)
        console.log(usersData)
    } catch (err) {
        console.error(err.message)
    }
})