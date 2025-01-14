const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'nama tidak boleh kosong']
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    // size: {
    //     type: String,
    //     enum: ['S','M','L','XL']
    // }
    category: {
        type: String,
        enum: ['Baju', 'Celana', 'Aksesoris', 'Jaket'],
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product; // untuk export model agar bisa dipanggil di file manapun