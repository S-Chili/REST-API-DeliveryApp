const express = require('express')

const router = express.Router()

const ctrl = require("../../controllers/shops");

router.get("/", (ctrl.getAll));

router.get('/:shopId', (ctrl.getById))

router.get('/:shopId/items/:itemId', ctrl.getItemById);

module.exports = router
