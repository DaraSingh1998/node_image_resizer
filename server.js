const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port =process.env.PORT||3000;
const router = require("./router");
var path = require('path');

// MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.use('/', router);

app.listen(port,()=>{
    console.log("Server Running");
});