const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

const data = geocode('Philadelphia', (data) => {
    console.log(data)
})

console.log(data)