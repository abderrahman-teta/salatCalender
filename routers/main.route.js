const express = require('express')

const salattime = require('../models/salattime')

const {addNewDay,main} = require('../controllers/salatController')

const router = express.Router()

router.get('/',main)

router.post('/save',addNewDay)

module.exports = router
