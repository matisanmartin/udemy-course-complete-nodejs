const request = require('request')

const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Buenos%20Aires.json?access_token=pk.eyJ1IjoibXNhbm1hcnRpbmFjb3N0YSIsImEiOiJjanc1bm80c24xMWgyNDBvd2k2Z2N3NTZrIn0.Pot2zT3o-XP0626sJdr_Aw'
const urlDarkSky = 'https://api.darksky.net/forecast/8971633f2bbdf443903eb6d5ffe6a5c0/37.8267,-122.4233?units=si'

request({url: urlMapbox, json: true}, (error, response) => {
    const center = response.body.features[0].center
    const latitude = center[1]
    const longitude = center[0]
    console.log(latitude, longitude)
})

request({ url: urlDarkSky, json: true }, (error, response) => {
    const currently = response.body.currently
    const summary = response.body.daily.data[0].summary
    console.log(summary + ' It is currently ' + currently.temperature + ' degrees. There is a ' + currently.precipProbability + '% chance of rain')
})