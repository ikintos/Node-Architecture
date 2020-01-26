const Ket = require("../../models/ket.model")
const API = require("../../core/action.core")
const { validationResult } = require("express-validator")

class Create extends API {
    constructor(){
        super(Ket)
    }
    async exec(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.send({
                code: 422,
                status: "error",
                message: errors.array()
            })
        }
        try {
            let { status, note, hasilTemp, start_at, end_at } = req.body
            let request_data = {
                status,
                note,
                hasilTemp,
                start_at,
                end_at
            }

            let data = await this.create(request_data)
            return res.send({
                code: 200,
                status: "Success",
                data
            }) 
        } catch(err){
            return res.send({
                code: 400,
                status: "Error",
                message: err.message
            })
        }
    }
}
module.exports = Create;