const SpkModel = require("../../models/spk.models")
const API = require("../../core/action.core")
const Keterangan = require("../../models/ket.model")


class Search extends API {
    constructor(){
        super(SpkModel)
    }

    async exec(req, res, next){
        try{

            let q = {}
            let { spk } = req.query
                if (spk) {
                    q.spk = {
                    $regex: `${spk}`,
                    $options: 'i'
                    }
                }
           
    
            let population = [
                {
                   path: 'ket_id',
                   model: Keterangan
                }
            ]
            let data = await this.list(q, population)
        
            return res.send({
                code: 200,
                status: "Success",
                data  
            })
            
        }catch(err){
            return res.send({
                code: 400,
                status: "Error",
                message: err.message
            })
        }

    }
}

module.exports = Search;