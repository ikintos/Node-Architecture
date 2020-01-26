const SPKModel = require('../../models/spk.models')
const API = require('../../core/action.core')
const Keterangan = require("../../models/ket.model")


class Show extends API{
    constructor(){
        super(SPKModel)
    }

    async exec(req, res, next){
        try{
            let { id } = req.params
            let population = [
                {
                   path: 'ket_id',
                   model: Keterangan
                }
            ]
            let data = await this.detail(id, population)

            return res.send({
                code: 200,
                status: 'Success',
                data
            })
        }catch(err){
            return res.send({
                code: 400,
                status: 'Error',
                message: err.message
            })
        }
    }
}

module.exports = Show