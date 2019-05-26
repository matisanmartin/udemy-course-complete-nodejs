const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach( note => {
        console.log('Title: ' + note.title)
    })
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatedNote = notes.find( note => note.title === title)

    if(!duplicatedNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('duplicate found for the title')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => note.title !== title)

    if(notes.length > filteredNotes.length) {
        saveNotes(filteredNotes)
        console.log(chalk.green.bold.inverse('Note removed'))
    } else {
        console.log(chalk.red.bold.inverse('Note not found'))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch(e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( note => note.title === title)

    if(note) {
        console.log(chalk.inverse('Title: ' + note.title))
        console.log('Body: ' + note.body)
    } else {
        console.log(chalk.red.inverse.bold('Note not found'))
    }
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}