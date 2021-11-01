const express = require('express');
const app = express();
const path = require('path');

//settigs
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require ('./routes/index'));



//static files



//listening the server

app.listen(4000, () =>{
    console.log("Server on port", app.get('port'));
});

