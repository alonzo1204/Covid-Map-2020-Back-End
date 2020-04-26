const {consumerNodeCron}=  require('../jobs/helper/consumer')


async function jobsConsumerApiCovid() {
    return await consumerNodeCron("consumerApiCovid")
}
async function jobsfillingDataCountries() {
    return await consumerNodeCron("fillingDataCountries")
}

//started cronRoute
module.exports.main = async function () {
    console.log("started node-cron")
       
    setTimeout( async () => {
        await jobsConsumerApiCovid()
    }, 5000);
    setTimeout( async () => {
        await jobsfillingDataCountries()
    }, 10000);
 

}
