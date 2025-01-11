const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Untuk models
const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1/shop_db').then((result) => {
    console.log('connect to mongodb');
}).catch((err) => {
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); // Untuk bisa mengambil value dari method post, maka express.urlencoded perlu dipanggil. Ini merupakan fitur di library express

// link home
app.get('/', (req,res) => {
    res.send('Hello Home!!!');
})

// link list product
app.get('/products', async (req,res) => {
    const products = await Product.find({})
    // console.log(products);
    res.render('products/index', {products});
})

// link untuk form menyimpan data product
app.get('/products/create', async (req,res) => {
    res.render('products/create');
})

// method post untuk menyimpan product baru
app.post('/products', async (req,res) => {
    const product = new Product(req.body); // mengambil data di form menggunakan req.body karena menggunakan method post
    await product.save(); // menyimpan datanya ke database
    // res.redirect(`/products`); // balik kehalaman product
    res.redirect(`/products/${product._id}`); // masuk kehalaman detail product yang baru dibuat
})

// link untuk menampilkan detail product
app.get('/products/:id', async (req,res) => {
    const product = await Product.findById(req.params.id); // menggunakan params karena method get, jika method post menggunakan req.body
    res.render('products/detail', {product});
})

app.listen(3000, () => {
    console.log('Shop app listening on http://127.0.0.1:3000');
})