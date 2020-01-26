const SPKModel = require("../../models/spk.models")
const API = require("../../core/action.core")
const Keterangan = require("../../models/ket.model")


class List extends API {
    constructor() {
        super(SPKModel)
    }

    async exec(req, res, next) {
        try {

            let q = {}
            let limit = parseInt(req.query.limit)
            if(!limit) {
                q.limit = 2
            }else {
                q.limit = limit
            }
            let page = parseInt(req.query.page)
            if(!page){
                q.page = 1
            } else {
                q.page = page
            }

            let population = [
                {
                   path: 'ket_id',
                   model: Keterangan
                }
            ]

             let data = await this.paginate(q, population)

             return res.send({
                 code: 200,
                 status: "Success",
                 data
             })
         } catch(err) {
             return res.send({
                 code: 400,
                 status: "Error",
                 message: err.message
             })
        }
    }
}
module.exports = List;