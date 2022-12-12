const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  //Matt
  // name: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   toUpper: true
  // },
  // type: {
  //   type: String,
  //   require: true,
  //   trim: true,
  // },
  entry: {
    type: String,
    required: true,
    trim: true
  }
//   user: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
});

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;
