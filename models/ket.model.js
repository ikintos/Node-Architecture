const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let ketSchema = new Schema({
    status : {
        type: String,
        required: true
    },
    slug : String,
    note : String,
    qty_ok: String,
    total_jam: String,
    start_at: {
        type: Date,
        default: null
    },
    end_at : {
        type: Date,
        default: null
    },
    created_at : {
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
ketSchema.plugin(mongoosePaginate)
ketSchema.virtual("Keterangans", {
    localField : '_id',
    foreignField : 'ket_id',
    justOnce: false
})

let Keterangan = mongoose.model("Keterangan", ketSchema)

module.exports = Keterangan;