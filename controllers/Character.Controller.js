const express = require("express");
const {
	getAllCharacters,
	getCharacterByID,
} = require("../queries/character/selects");
const { createCharacter } = require("../queries/character/insert");
const characterController = express.Router();

// Read
characterController.get("/", async (req, res) => {
	const data = await getAllCharacters();
	res.status(200).json(data);
});
characterController.get("/:id", async (req, res) => {
	let { id } = req.params;
	const data = await getCharacterByID(id);
	res.status(200).json(data);
});
// Create
characterController.post("/", async (req, res) => {
	const { name, age, image, description } = req.body;
	const data = await createCharacter(name, age, image, description);
    if (data) {
        res.status(201).json({"data":"ok"});
    }else{
        res.status(400).json({"data":"error"});
    }

});

module.exports = characterController;
