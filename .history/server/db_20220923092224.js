const Pool = require('pg').Pool

const pool = new Pool({
    user: "kanishka",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "Assessment"
});

module.exports = pool;