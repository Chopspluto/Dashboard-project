const express = require('express');
const router = express.Router();

// Register route
router.post("/register", async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send
    }
})

module.exports = router;