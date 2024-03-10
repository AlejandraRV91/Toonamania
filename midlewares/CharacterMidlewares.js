//middleware to check  the character structure
function VerifyCharacter(req, res, next) {
	// body must have: (name,age,image,description)
	const { name, age, image, description } = req.body;
	// if not return 400
	if (!name || !age || !image || !description)
		return res
			.status(400)
			.json({
				error: "Character must have: (name,age,image,description)",
			});
	// if ok return next
	next();
}

// verify the if the id is valid for get individual character
function VerifyCharacterID(req, res, next) {
	// id must be in the params
	const { id } = req.params;
	// if not return 400
	if (!id)
		return res
			.status(400)
			.json({ error: "Character id must be in the params" });

	// id must be a number and greater than 0
	if (isNaN(id) || id < 1)
		return res
			.status(400)
			.json({
				error: "Character id must be a number and greater than 0",
			});

	next();
}

module.exports = {
    VerifyCharacter,
    VerifyCharacterID,
}