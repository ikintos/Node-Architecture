const KetModel = require('../../models/ket.model')
const API = require('../../core/action.core')

class Update extends API {
    constructor() {
        super(KetModel)
    }

    async exec(req, res, next) {
        try {
            let { id } = req.params
            let { status, note, start_at, end_at, hasilTemp } = req.body
            let request_data = {
                status,
                note,
                hasilTemp,
                start_at,
                end_at
            }
            let data = await this.edit(id, request_data)

            return res.send({
                code: 200,
                status: 'Success',
                data
            })
        }catch(err){
            return res.send({
                code: 400,
                status: 'erorr',
                message: err.message
            })
        }
    }
}

module.exports = Update