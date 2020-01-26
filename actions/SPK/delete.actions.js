const SPKModel = require('../../models/spk.models')
const API = require('../../core/action.core')

class Delete extends API {
    constructor() {
        super(SPKModel)
    }

    async exec(req, res, next) {
        try {
            let { id, spk} = req.params

            let data = await this.delete(id, spk)
            return res.send({
                code: 200,
                status: "Success",
                data
            })
        }
        catch(err){
            return res.send({
                code:400,
                status: "Error",
                message: err.message
            })
        }
    }
}
module.exports = Delete