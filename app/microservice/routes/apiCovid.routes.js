const {Router} = require('express')
const router = Router()
const {consumerApiCovid,fillingDataCountries} = require('../controllers/apiCovid.controller')

router.get('/consumerApiCovid', consumerApiCovid)
router.get('/fillingDataCountries', fillingDataCountries)

module.exports = router