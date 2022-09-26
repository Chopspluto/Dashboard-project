const Pool = require('pg').Pool

const pool = new Pool({
    user: "kanishka",
    password: "k.j",
    host: "localhost",
    port: 5432,
    database: "Assessment"
});

module.exports = pool;