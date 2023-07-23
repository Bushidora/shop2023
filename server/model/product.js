const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const ObjectId = Schema.ObjectId;


const ProductSchema = new Schema({
//   author: ObjectId,
ID: Number,
name: {type: String, required: true, max:[60, '最大６０文字まで']},
manufacturer: String,
category: String,
price: Number,
image_path: String,
stock: Number,
description: String,
created_at: Date,
updated_at: Date,
});

module.exports = mongoose.model('Product', ProductSchema)