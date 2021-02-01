
require('./config/config')

const express = require('express');

const app = express();
const bodyParser = require('body-parser')

const path = require('path');

const mongoose = require('mongoose');

const router = express.Router();

//Agregar CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
   next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

/* app.route('/*').get(function(req, res) { 
    return res.sendFile(path.resolve(__dirname , '../public')); 
});
 */

//Habilitar carpeta public
app.use( express.static(path.resolve(__dirname , '../public')) )

//Configuracion global de rutas
app.use( require('./routes/index') )

//Conexion a BD
mongoose.connect(process.env.URLBD, 
                {useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}, 
                (err, resp) =>{
                    
                    if(err) throw err;
                    
                    console.log('BASE DE DATOS ONLINE!!!', process.env.URLBD);

                });

//Escuchar puerto            
app.listen(process.env.PORT, () =>{
    console.log('Escuchando puerto: ', process.env.PORT);
})