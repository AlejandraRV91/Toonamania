const pgp = require('pg-promise')();
const dotenv = require("dotenv");
dotenv.config();

const credentials={
    user:process.env.PG_USER,
    host:process.env.PG_HOST,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT,
    database:process.env.PG_DATABASE
}

const DBConection=pgp(credentials)

module.exports=DBConection