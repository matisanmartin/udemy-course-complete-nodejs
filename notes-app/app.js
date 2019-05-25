const getNotes = require('./notes.js')
const chalk = require('chalk')

const notes = getNotes()
console.log(notes)

console.log(chalk.red.bold.inverse('Error'))



