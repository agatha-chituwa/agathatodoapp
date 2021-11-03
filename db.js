const Pool = require("pg").Pool;
 require("dotenv").config();

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE
// }
const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
   
})


// const connectionString= process.env.DATABASE_URL

//const pool = new Pool({connectionString,
 // ssl: { rejectUnauthorized: false }
//https://agathatodoapp.herokuapp.com/
//});

module.exports = pool;

//ave commented out the ssl part coz amworking locally
// am commenting out the devconfig too and replace it by declairing it using pool
//ave commented out the calling of env file coz we dont need it anymore




















// const Pool = require('pg').Pool;
// require('dotenv').config();

// const devConfig = {
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE

// }
// const proConfig = {
//     connectionString: process.env.DATABASE_URL //COMING FROM HEROKU
// }


// const pool = new Pool(
//     process.env.NODE_ENV === "production" ? proConfig : devConfig
//  );

// module.exports = pool;

