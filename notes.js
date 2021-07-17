const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green.inverse('Note added.'))
  } else {
    console.log(chalk.green.inverse('Note title taken.'));
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const remainingNotes = notes.filter(note => note.title !== title);

  if (remainingNotes.length !== notes.length) {
    saveNote(remainingNotes);
    console.log(chalk.red.inverse('Note removed.'))
  } else {
    console.log(chalk.red.inverse('Note not found.'));
  }
}

const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note, index) => {
    printNote(note, index);
  });
}

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    printNote(note);
  } else {
    console.log(chalk.red('Note not found.'));
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const printNote = (note, index) => {
  if (typeof index !== 'undefined') {
    console.log(chalk.red.inverse('Note ' + (index + 1)))
  }

  console.log('Title: ' + chalk.green(note.title));
  console.log('Body: ' + chalk.red(note.body) + '\n');
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};