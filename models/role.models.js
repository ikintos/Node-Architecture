const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

let roleSchema = new Schema({
    name: { 
        type: String,
        unique: true,
        required: true
    },
    slug: String,
    permissions: {
        type: Array,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

roleSchema.plugin(mongoosePaginate);
let Role = mongoose.model("Role", mongoosePaginate);
module.exports = Role;
