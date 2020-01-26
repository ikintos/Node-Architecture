const express = require('express')
const router = express.Router()
const { check } = require("express-validator")
const CreateKet = require("../actions/KET/create.actions")
const ListSPK = require("../actions/SPK/search.actions")
const UpadateKet = require("../actions/KET/update.actions")

router.post("/", [
    check('status').not().isEmpty()

], async (req,res, next) => await new CreateKet().exec(req, res, next))

router.get("/", async (req, res, next) =>
await new ListSPK().exec(req, res, next))

router.put("/:id", async (req, res, next) =>
await new UpadateKet().exec(req, res, next))

module.exports = router