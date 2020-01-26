const mongoose = require('mongoose')
const Schema = mongoose.Schema

let fpbSchema = new Schema({
    spk : String,
    kategori : {
        type: Array,
        default: []
    },
    slug : String,
    keterangan : {
        type: String,
        required : true
    },
    barang_id : Array,
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

fpbSchema.virtual("barang", {
    localField : "barang_id",
    foreignField : "_id",
    justOnce: false
})
spkSchema.virtual("kodeFPB", {
    localField : "kodeFPB_id",
    foreignField : "_id",
    justOnce: false
})

let FPB = mongoose.model("FPB", fpbSchema)
module.exports = FPB