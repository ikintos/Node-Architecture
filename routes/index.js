const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const moment = require("moment")

router.get('/', (req, res) => {
    db_status = mongoose.connection.readyState
    db_status_name = [ "disconnected", "connected", "connecting", "disconnecting" ]

    return res.send({
        app_name: "monitoring",
        version: "1.0.0",
        server_time: moment().format(),
        database_status: db_status_name[db_status]
    })
})

module.exports = router