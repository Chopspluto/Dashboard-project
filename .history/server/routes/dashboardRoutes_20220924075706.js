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
        const name = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);
        console.log(name.rows[0])
        if(name !== "admin"){
            console.log("Admin only. Access denied");
            res.json("Admin only. Access denied");
        }
        console.log("Access Granted");
        res.json("Access Granted");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});


module.exports = router;