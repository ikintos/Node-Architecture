const index = require("./index")
const spk = require("./spk.routes")
const ket = require("./ket.routes")

const route = (app) => {
    app.use("/", index)
    app.use("/spk", spk)
    app.use("/ket", ket)
}

module.exports = route