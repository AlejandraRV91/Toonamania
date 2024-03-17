const express = require("express");
const cors = require("cors");
const characterController = require('./controllers/Character.Controller');

const app = express();

app.use(cors());
app.use(express.json())


app.use("/characters", characterController)

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Hi, welcome to this API",
	});
});

app.use((req, res) => {
	res.status(404).json({ error: "hey, the route you are requesting does not exist" });
});

module.exports = app;
