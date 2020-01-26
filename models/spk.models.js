const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mongoosePaginate = require("mongoose-paginate")

let spkSchema = new Schema ({
    spk : {
        type: String,
        required: true
        },
    entry : {
        type: Date,
        default: null,
        required: true
    },
    mulai: {
        type: Date,
        default: null,
        required: true 
    },
    selesai: {
        type: Date,
        default: null,
        required: true
    },
    kodeFPB_id: {
        type: String,
        default: null,
        required: true
    },
    nama: String,
    satuan: String,
    Qty: String,
    SO: {
        type: String,
        required: true
    },
    customer: String,
    ket_id: String,
    created_at : {
        type: Date,
        default: Date.now()
    },
    updated_at : {
        type: Date,
        default: Date.now()
    },
    deleted_at : {
        type: Date,
        default: null
    }
})

spkSchema.plugin(mongoosePaginate)
spkSchema.virtual("SPK", {
    localField : '_id',
    foreignField : '_id',
    justOnce: false
})
let SPK = mongoose.model("SPK", spkSchema)

module.exports = SPK