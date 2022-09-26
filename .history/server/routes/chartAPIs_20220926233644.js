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
        return res.json(usersData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// select products bought
router.get("/users/products", authorization, async (req, res) => {
    try {
        const productData = await pool.query("SELECT product_1, product_2, product_3 FROM users");
        res.json(productData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

// select sales by month
router.get("/users/products", async (req, res) => {
    try {
        const priceData = await pool.query("SELECT product_1, product_2, product_3 FROM users");
        res.json(priceData.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

module.exports = router;