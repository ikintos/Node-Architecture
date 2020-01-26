const express = require('express')
const router = express.Router()
const { check } = require("express-validator")
const CreateSPK = require("../actions/SPK/create.actions")
const ShowSPK = require("../actions/SPK/show.actions")
const DelSPK = require("../actions/SPK/delete.actions")
const ListSPK = require("../actions/SPK/search.actions")
const PageSPK = require("../actions/SPK/list.actions")


//Route for Create Data
router.post("/create", [
    check('spk').not().isEmpty(),
    check('entry').not().isEmpty(),
    check('mulai').not().isEmpty(),
    check('selesai').not().isEmpty(),
    check('kodeFPB_id').not().isEmpty(),
    check('nama').not().isEmpty(),
    check('satuan').not().isEmpty(),
    check('Qty').not().isEmpty(),
    check('SO').not().isEmpty(),
    check('customer').not().isEmpty()
], async (req,res, next) => await new CreateSPK().exec(req, res, next))

//Route for GetList Data
router.get("/list", async (req, res, next) =>
await new ListSPK().exec(req, res, next))

//Route for Search by ID
router.get("/:id", async (req, res, next) =>
await new ShowSPK().exec(req, res, next))

//Router for Paginate
router.get("/", async (req, res, next) =>
await new PageSPK().exec(req, res, next))

//Route for Delete data
router.delete("/:id", async (req, res, next) =>
await new DelSPK().exec(req, res, next))

module.exports = router