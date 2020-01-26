const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

let UserSchema = new Schema ({
    nama : String,
    slug : String,
    departement : {
        type: String,
        required: true
    },
    nrk : {
        type : String,
        unique : true,
        required: true
    },
    role_id: {
        type: [],
        default: null
    },
    username: {
        type: String,
        default: null        
    },
    password: {
        type: String,
        default: null
    },
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

UserSchema.plugin(mongoosePaginate);
let User = mongoose.model('User', UserSchema)
module.exports = User;