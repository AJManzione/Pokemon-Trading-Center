const { Schema, model } = require('mongoose');
const pokemonSchema = new Schema({
    //Matt
})


const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon