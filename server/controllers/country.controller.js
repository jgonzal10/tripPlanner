const {listCountries}= require('../services/country.service')


const getListOfCountries = (req, res, next) => { 
    try {
     
      let data =  listCountries()
      let countries = data;
      res.json(countries)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }

module.exports ={getListOfCountries}