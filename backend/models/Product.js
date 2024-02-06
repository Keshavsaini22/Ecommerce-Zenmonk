const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    desc: { type: String, require: true },
    tag: { type: String, require: true },
    stock: { type: Number, require: true },
    color1: { type: String, require: true },
    color2: { type: String, require: true },
    category: { type: String, require: true },
    userId: { type: ObjectId },
    images: { type: Array, require: true }
})

module.exports = mongoose.model("products", ProductSchema)