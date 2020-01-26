const mongoose = require('mongoose')
const Schema = mongoose.Schema

let barSchema = new Schema({
    nama : String,
    slug : String,
    spesifikasi : String,
    qty : Number,
    sat : String,
    price : String,
    note : String,
    create_at : {
        type : Date,
        default: Date.now()
    },
    updated_at : {
        type : Date,
        default: Date.now()
    },
    deleted_at : {
        type: Date,
        default: null
    }
})

let Barang = mongoose.model("Barang", barSchema)
module.exports = Barang