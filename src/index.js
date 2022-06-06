const express = require('express');
const app= express();
//const path =require('path');
//settings
const PORT= process.env.PORT || 3000;
app.set('port',PORT);

//rute
app.get('/',(req,res)=>{
   res.send('hola mundo');
   // res.sendFile(path.join(__dirname ,'htmlProyect/inicio.html'));
    //res.render('inicio');
});

//listening the server
app.listen(app.get('port'),()=>{
    //console.log(__dirname)
});