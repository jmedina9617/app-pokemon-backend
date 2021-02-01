
const express = require('express')
const app = express();

const Pokedex = require('../models/pokemon');

//GET

app.get('/pokemon', (req, res) =>{

    Pokedex.find( (err, pokemon)  => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        Pokedex.countDocuments( (err, count) => {
            
            res.json({
                ok: true,
                pokemon,
                cantidad: count
            });

        });

    });   
    
})

//GET BY ID

app.get('/pokemon/:id', (req, res) =>{

    let id = req.params.id;
    
    Pokedex.findById(id, (err, pokemon) =>{
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            pokemon
        })

    })    
    
})

//GET BY TEXT

app.get('/pokemon/buscar/:text', (req, res) =>{

    //let regex = RegExp()

    let text = req.params.text;
    
    Pokedex.find( {"name.english": { "$regex": "^"+text, "$options": "i" }} , (err, pokemon) =>{ 
        
        console.log(pokemon);
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            pokemon
        })

    })  

    /* Pokedex.find( {$text: {$search: text, $caseSensitive: true}}, (err, pokemon) =>{  
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            pokemon
        })

    })  */
    
})

module.exports = app