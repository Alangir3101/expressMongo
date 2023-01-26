const express = require('express')
const controller = require('../controller/user')
const router = express.Router()
const path = '/user'

router.get(path, controller.getData(req,res));

module.exports = router
