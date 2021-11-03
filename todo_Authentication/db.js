const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'authenticate',
    password: 'agatha99',
    port: 5432
});

module.exports = pool;