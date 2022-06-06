console.log("server works");
const express = require ("express");
const app = express();
const path = require('path');
//setting

const PORT = process.env.PORT || 3000 ;
app.listen(PORT);
//app.set('port',PORT);
//middlewares


//routes
app.get('/', (req, res)=>{
    res.send('hola mundo');
   // res.sendFile(path.join(__dirname,'/views/Site1/Inicio.html'));
    //res.sendFile(path.join(__dirname,'/views/Site1/proyecto.html'));
   // console.log(path.join(__dirname ,'views/paginaInicio.html'));
});
//static files


//listening the server





app.listen(app.get('port'),() => {
    console.log('server on port',app.get('port'))
});