const pgp = require("pg-promise")();
const dotenv = require("dotenv");
dotenv.config();

const { PG_USER, PG_HOST, PG_PASSWORD, PG_PORT, PG_DATABASE } = process.env;

const dbConfig = {
	user: PG_USER,
	host: PG_HOST,
	password: PG_PASSWORD,
	port: PG_PORT,
	database: PG_DATABASE,
};

const db = pgp(dbConfig);

db.connect()
	.then((obj) => {
		console.log(
			"Conexión exitosa a la base de datos:",
			obj.client.database
		);
		obj.done(); 
	})
	.catch((error) => {
		console.error(
			"Error al conectar a la base de datos:",
			error.message || error
		);
	});

module.exports = db;
