const express = require('express');
const app= express();
//settings
const PORT= process.env.PORT ||3000
app.set('port',PORT)

//rute
app.get('/',(req,res)=>{
    res.send('hola mundo');
    //res.sendFile('');
});

//listening the server
app.listen(app.get('port'),()=>{
    console.log("hola")
});