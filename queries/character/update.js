const DBConection = require("../../db/DBConfig");

async function updateCharacter(id, name, age, image, desc) {
	try {
		await DBConection.result(
			"UPDATE characters SET name = $2, age = $3, image = $4, description = $5 WHERE id = $1",
			[id, name, age, image, desc]
		);
		return true;
	} catch (error) {
		console.log("Error", error);
        return {
            error: error.message
        };
	}
}

module.exports = { updateCharacter };
