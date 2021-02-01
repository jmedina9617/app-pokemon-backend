
//================================
//PUERTO
//================================

process.env.PORT = process.env.PORT || 3000;

//================================
//ENTORNO DB
//================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//================================
//BD
//================================

let urlBD;

if(process.env.NODE_ENV === 'dev'){
    urlBD = 'mongodb://localhost:27017/pokemon';
}else{
    urlBD = process.env.MONGO_URL;
}

process.env.URLBD = urlBD;

//