const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(){
    const payload = {
        user: user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: '30s'})
}

module.exports = j