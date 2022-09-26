const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorization = require('../middleware/authorisation');

router.get("/", authorization, async(req, res) => {
    
})

module.exports = router;