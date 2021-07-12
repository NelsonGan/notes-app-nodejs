const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

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
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body)
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: function () {
    console.log('Removing a new note');
  }
});

// Read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function () {
    console.log('Reading a note');
  }
});

// List command
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: function () {
    console.log('Listing notes');
  }
});

yargs.parse();
