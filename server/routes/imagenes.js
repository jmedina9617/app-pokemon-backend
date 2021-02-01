
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

app.get('/imagen/:img', (req, res) =>{

    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../images/${img}`);

    //if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen)
    //}
    /* else{
        let pathNoImg = path.resolve(__dirname, '../assets/no-img.png');
        res.sendFile(pathNoImg);
    } */

})



module.exports = app;