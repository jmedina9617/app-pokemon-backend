
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let pokedexSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: Object
    },
    type: {
        type: Array
    },
    base: {
        type: Object
    }
});

//pokedexSchema.index({name: 'text', 'name.english': 'text'});
pokedexSchema.index( {'$**': 'text'} );

module.exports = mongoose.model('Pokedex', pokedexSchema, 'pokedex');