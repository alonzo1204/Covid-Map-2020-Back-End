const {apiCovid, consumerCoviMap} = require('../../jobs/helper/consumer')
const {getConnection} = require('../lowdbConnection')
const {dataCountry} = require('../dataCountries')
  function validCountry(objOfLowDb) {
    let res = {}
    res.status = false
    res.data = {}
   for (const obj of dataCountry) {
     if(obj.country.toLowerCase() === objOfLowDb.country.toLowerCase())
        { 
            res.status = true
            let newData = {
                ...objOfLowDb,
                ...obj
            }
            res.data = newData
        }
   }
   return res
}
const consumerApiCovid = async (req,res) => {
    await getConnection().set('data',[]).write() //setea la data de nuestro lowwdb
    const api = await apiCovid()
    for (const i of api) {
        //agrega la nueva data del api
        await getConnection().get('data').push(i).write()      
    }
    console.log("consumerApiCovid ", new Date)
    res.end({"consumerApiCovid":"successful"})
}
const fillingDataCountries = async (req,res) => {
   // await consumerCoviMap(false,"dataCountries","DELETE") 
    const dataJson = await getConnection().get('data').value()
    for (const i of dataJson) {
        //"i" is each dataJson object
        let dataValid = validCountry(i)
      if(dataValid.status)
      {
        
        await consumerCoviMap(dataValid.data,"dataCountries","POST") 
      }     
    }
    console.log("fillingDataCountries ", new Date)
    res.end({"fillingDataCountries":"successful"})
}
module.exports = {
    consumerApiCovid,
    fillingDataCountries
}