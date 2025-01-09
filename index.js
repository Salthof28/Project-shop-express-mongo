const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1/shop_db').then((result) => {
    console.log('connect to mongodb');
}).catch((err) => {
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send('Hello Home!!!');
})

app.listen(3000, () => {
    console.log('Shop app listening on http://127.0.0.1:3000');
})