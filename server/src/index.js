//importo express 
const { lookupService } = require('dns');
const express = require('express');
//para llammar a nuestra libreria de express() como una funcion nos deevuelve una aplicacion por eso la guardo como tal
const app = express();

//middlewares: permite procesar informacion antes de que llegue a mi app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//importo routes
app.use(require('./routes/index'));


//le di la ruta 5000
app.listen(process.env.PORT || 5000, () => console.log('API ready port: 5000...'));


