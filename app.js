const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customise yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'String',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'String',
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();