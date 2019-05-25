const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ', argv.body)
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

yargs.parse()
