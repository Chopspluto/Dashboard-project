const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');
// Dashboard Routes
// Private 
// Users with tokens
router.get("/", authorization, async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user]);

        res.json(users.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});


// Admin Dashboard Route
// Private
// Admin only
router.get("/admin", authorization, async (req, res) => {
    try {
        const verifyName = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);
        if(verifyName.rows[0] != "admin"){
            res.status(401).json("Admin only. Access denied");
        }
        res.status(200).json("Access Granted")
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});


module.exports = router;