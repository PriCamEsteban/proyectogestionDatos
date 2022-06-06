const express = require('express');
const app= express();
//settings
//const PORT= process.env.PORT
app-set('port',3000)

//rute
app.get('/',(req,res)=>{
    res.send('hola mundo');
});

//listening the server
app.listen(app.get('port'),()=>{
    console.log("hola")
});