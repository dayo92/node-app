const {argv} = require('yargs');
const note = require('./note.js');

let command = argv._[0];

if (command === 'add') {
    note.addNote(argv.note)
} else if (command === 'remove') {
    note.removeNote(argv.note);
} else if (command === 'read') {
    let contents = note.loadNotes(argv.note);
    console.log(contents)
} else if (command === 'list') {
    note.listNotes();
} else {
    console.log('unknown command');
};