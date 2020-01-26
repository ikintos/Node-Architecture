const SPK = require("../../models/spk.models")
const API = require("../../core/action.core")
const { validationResult } = require("express-validator")

class Create extends API {
    constructor(){
        super(SPK)
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
            let { spk, entry, mulai, selesai, kodeFPB_id, nama, satuan, Qty, SO, customer, ket_id } = req.body
            let request_data = {
                spk,
                entry,
                mulai,
                selesai,
                kodeFPB_id,
                nama,
                satuan,
                Qty,
                SO,
                customer,
                ket_id
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
module.exports = Create