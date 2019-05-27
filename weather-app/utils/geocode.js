const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXNhbm1hcnRpbmFjb3N0YSIsImEiOiJjanc1bm80c24xMWgyNDBvd2k2Z2N3NTZrIn0.Pot2zT3o-XP0626sJdr_Aw'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

module.exports = geocode