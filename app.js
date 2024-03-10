const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const characterController = require('./controllers/Character.Controller');

const app = express();

app.use(cors());
app.use(express.json())
app.use(morgan("dev"));

app.use("/character", characterController)

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Hola, este es el inicio de la api",
	});
});

app.use((req, res) => {
	res.status(404).json({ error: "hey, there's a error in your requets}" });
});

module.exports = app;
