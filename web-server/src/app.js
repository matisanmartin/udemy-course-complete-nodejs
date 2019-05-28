const path = require('path')
const express = require('express')

const app = express()

app.set('view engine','hbs')

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Matias San Martin'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    })

})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        help: 'Helpful text',
        name: 'Matias San Martin'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Forecast',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server started correctly')
})