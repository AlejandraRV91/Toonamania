const DBConection = require("../../db/DBConfig");

async function deleteCharacter(id) {
    try {
        await DBConection.result(
            'DELETE FROM characters WHERE id = $1',
            [id]
        );
        return true;
    } catch (error) {
        console.log("Error", error);
        return {
            error: error.message
        };
    }
}

module.exports = {
    deleteCharacter
}