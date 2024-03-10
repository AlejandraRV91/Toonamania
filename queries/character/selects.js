const DBConection = require("../../db/DBConfig");

// get all characters
async function getAllCharacters() {
	try {
		const characters = await DBConection.manyOrNone(
			"SELECT * FROM characters"
		);
		if (characters && characters.length > 0) {
			return characters;
		}else{
			throw new Error("No characters found");
		}
	} catch (error) {
		console.log("Error", error);
		return {
			error: error.message
		};
	}
}

// get character by id
async function getCharacterByID(id) {
	try {
		const character = await DBConection.oneOrNone(
			"SELECT * FROM characters WHERE id=$1",
			[id]
		);
		if (character && Object.keys(character).length > 0) {
			return character;
		} else {
			throw new Error("No character found with that id");
		}
	} catch (error) {
		console.log("Error", error);
		return {
			error: error.message
		};
	}
}

// get character by name
async function getCharacterByName(name) {
	try {
		const character = await DBConection.manyOrNone(
			"SELECT * FROM characters WHERE name=$1",
			[name]
		);

		if (character && character.length > 0) {
			return character;
		} else {
			throw new Error("No characters found with that name");
		}
	} catch (error) {
		console.log("Error", error);
		return {
			error: error.message
		};
	}
}

module.exports = {
	getAllCharacters,
	getCharacterByID,
	getCharacterByName,
};
