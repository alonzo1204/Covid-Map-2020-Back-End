const fetch = require("node-fetch");
const API =  process.env.PORT || "http://localhost:8080"

exports.apiCovid =async () => {
    const response = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
    const apiCovid = await response.json();
    console.log("consumer apiCovid")
    return apiCovid
}

exports.consumerCoviMap = async (bodyJson = false,api,method) => {
    let options = {}
    options.method = method
   
      if(bodyJson){
        options.headers = {
            'Content-Type': 'application/json'
          }
        options.body = JSON.stringify(bodyJson)
      }
      console.log(options)
      const url = `${API}/api/test/${api}`
      console.log(url)
    await fetch(url,options).then(async res => {
        console.log("Status: ", res.status);
        console.log("StatusText: ", res.statusText);
        console.log("OK: ", res.ok);
        return await res;
    });
}

exports.consumerNodeCron = async (api,bodyJson = false,method = false) => {
    const URL = `${API}/nodeCron/${api}`
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(bodyJson),
    }
    method && bodyJson ?(
        await fetch(URL,options)
        .then(async res => {
            console.log("Status: ", res.status);
            console.log("StatusText: ", res.statusText);
            console.log("OK: ", res.ok);
            return await res;
        })
    ):(
        await fetch(URL)
        .then(async res => {
            console.log("Status: ", res.status);
            console.log("StatusText: ", res.statusText);
            console.log("OK: ", res.ok);
            return await res;
        })
    ) 
}