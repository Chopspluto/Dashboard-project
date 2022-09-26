const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgress",
    password: "K@nishka",
    host: "localhost",
    port: 5432,
    database: "Assessment"
});

module.exports = pool;