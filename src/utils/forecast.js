const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/6033fcdc25640ade79e489379747263f/' + 
                encodeURIComponent(latitude) + ',' + 
                encodeURIComponent(longitude) + 
                '?exclude=[minutely,hourly]&units=si'

    request({ url:url, json:true }, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(data.currently)
    if (error) {
        callback("Unable to connect to weather service!", undefined)
    }else if(response.body.error) {
        callback("Unable to find location!", undefined)
    }else{
        temperature = response.body.currently.temperature
        precipation = response.body.currently.precipProbability
        callback(undefined, response.body.daily.summary+" It is currently "+temperature+" degrees out. There is a "+precipation+"% chance of rain.")
    }
})

}

module.exports = forecast