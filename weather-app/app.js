const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'find',
    describe: 'find a city',
    builder: {
        city: {
            describe: 'city name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        geocode(argv.city, (error, {latitude, longitude, location}) => {
            if(error) {
                return console.log(error)
            }
        
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                }
        
                console.log(location)
                console.log(forecastData)
            })
        })
    }
})

yargs.parse()









