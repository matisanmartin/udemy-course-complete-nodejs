const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


//Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function() {
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists al the notes',
    handler: function() {
        console.log('Listing al the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function() {
        console.log('Reading note')
    }
})

console.log(yargs.argv)

