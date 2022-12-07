const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  //Matt
  pokemon: {
    type: String,
    require: true,
    trim: true,
  },
  type: {
    type: String,
    require: true,
    trim: true,
  },
  sprite: {
    type: String,
    require: true,
    trim: true,
  },
//   user: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
});

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;
