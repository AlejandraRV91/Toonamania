const db = require("../db/DBConfig");

//middleware to check  the character structure
function VerifyBody(req, res, next) {
  // body must have: (name,age,image,description)
  // Below we proceed with the body's destructuration.
  const { name, age, image, description } = req.body;
  // if there's nothing from the body, then return 400
  if (!name || !age || !image || !description)
    return res.status(400).json({
      error: "Character must have: (name,age,image,description)",
    });
  // if everything is ok, then we proceed with next
  next();
}

// verify if the id is valid to get an individual character.
function VerifyID(req, res, next) {
  // id must be in the params
  const { id } = req.params;

  // if theres not an id in the params,then, returns an error.
  // if is not a number, then...returns 400.
  // id must be a number and greater than 0.
  if (!id || isNaN(id) || id < 1)
    return res.status(400).json({ error: "Character id is invalid" });

  next();
}

async function ValidateExist(req, res, next) {
  // We get the id throug the request's parameters.
  const { id } = req.params;

  // we try to get the character with the id from the database with PG Promise using the function oneOrNone.
  const character = await db.oneOrNone("SELECT * FROM characters WHERE id=$1", [
    id,
  ]);

  // if the character is not found, we return an error.
  if (!character)
    return res.status(400).json({ error: "Character id is not found" });

  next();
}

module.exports = {
  VerifyBody,
  VerifyID,
  ValidateExist,
};
