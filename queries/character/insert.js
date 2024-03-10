const DBConection = require("../../db/DBConfig");

async function createCharacter(name, age, image, desc) {
	try {
		await DBConection.oneOrNone("INSERT INTO characters (name,age,image,description) VALUES ($1,$2,$3,$4)", [
			name, age, image, desc
		]);
        return true
	} catch (error) {
		console.log("Error", error);
	}
    return false
}

module.exports={createCharacter}