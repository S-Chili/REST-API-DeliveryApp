const express = require('express')

const router = express.Router()

const ctrl = require("../../controllers/shops");

const {ctrlWrapper} = require("../../helpers")

router.get("/", ctrlWrapper(ctrl.getAll));

router.get('/:shopId', ctrlWrapper(ctrl.getById))

router.get('/:shopId/items/:itemId', ctrlWrapper(ctrl.getItemById));

module.exports = router
