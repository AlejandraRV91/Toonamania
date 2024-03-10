const DBConection = require("../../db/DBConfig");

async function getAllCharacters() {
	try {
		const characters = await DBConection.manyOrNone(
			"SELECT * FROM characters"
		);
		if (characters) {
			return characters;
		}
	} catch (error) {
		console.log("Error", error);
	}
	return [];
}
async function getCharacterByID(id) {
	try {
		const character = await DBConection.oneOrNone(
			"SELECT * FROM characters WHERE id=$1",
			[id]
		);
		if (character) {
			return character;
		}
	} catch (error) {
		console.log("Error", error);
	}
	return {};
}

module.exports = {
	getAllCharacters,
	getCharacterByID,
};
