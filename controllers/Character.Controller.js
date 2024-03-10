const express = require("express");
const {
	getAllCharacters,
	getCharacterByID,
	getCharacterByName,
} = require("../queries/character/selects");
const { createCharacter } = require("../queries/character/insert");
const {
	VerifyCharacter,
	VerifyCharacterID,
} = require("../midlewares/CharacterMidlewares");
const { updateCharacter, updateCharacterPatch } = require("../queries/character/update");
const { deleteCharacter } = require("../queries/character/delete");
const characterController = express.Router();

// Read

// get all
characterController.get("/", async (req, res) => {
	const data = await getAllCharacters();
	let status = 200;
	if (data.error) {
		status = 404;
	}
	res.status(status).json(data);
});

// get by id
characterController.get("/id/:id", VerifyCharacterID, async (req, res) => {
	let { id } = req.params;
	const data = await getCharacterByID(id);
	let status = 200;
	if (data.error) {
		status = 404;
	}
	res.status(status).json(data);
});

// get by name
characterController.get("/name/:name", async (req, res) => {
	let { name } = req.params;
	const data = await getCharacterByName(name);
	let status = 200;
	if (data.error) {
		status = 404;
	}
	res.status(status).json(data);
});

// Create
characterController.post("/", VerifyCharacter, async (req, res) => {
	const { name, age, image, description } = req.body;
	const data = await createCharacter(name, age, image, description);
	if (data === true) {
		res.status(201).json({ data: "ok" });
	} else {
		res.status(400).json({ data });
	}
});

// Update

// put by id
characterController.put(
	"/:id",
	VerifyCharacterID,
	VerifyCharacter,
	async (req, res) => {
		const { id } = req.params;
		const { name, age, image, description } = req.body;
		const data = await updateCharacter(id, name, age, image, description);
		if (data === true) {
			res.status(201).json({ data: "ok" });
		} else {
			res.status(400).json({ data });
		}
	}
);

// patch by id
characterController.patch("/:id", VerifyCharacterID, async (req, res) => {
	const { id } = req.params;
	const { name, age, image, description } = req.body;
	const data = await updateCharacterPatch(id, name, age, image, description);
	if (data === true) {
		res.status(201).json({ data: "ok" });
	} else {
		res.status(400).json({ data });
	}
});

// Delete
characterController.delete("/:id", VerifyCharacterID, async (req, res) => {
	const { id } = req.params;
	const data = await deleteCharacter(id);
	if (data === true) {
		res.status(201).json({ data: "ok" });
	}else{
		res.status(400).json({ data });
	}
})

module.exports = characterController;
