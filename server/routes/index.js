const express = require('express')
const { countrycontroller } = require('../controllers')
const router = express.Router()

router.get('/', (req,res) => res.send('Trip Planner'))
router.get('/countries', countrycontroller.getListOfCountries)


module.exports = router