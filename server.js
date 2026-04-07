const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use((req, res, next)=>{
   console.log('Welcome to my first Express Server.');
    next();

});