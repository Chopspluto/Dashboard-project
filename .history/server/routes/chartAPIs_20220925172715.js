const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET USERS
router.get("/users", async(req, res)=> {
    const usersData = await pool.query("SELECT * FROM users");
    console.log()
})