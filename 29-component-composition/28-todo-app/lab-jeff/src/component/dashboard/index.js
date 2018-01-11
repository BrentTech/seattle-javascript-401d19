import React from 'react';
import NoteForm from '../note-form';
import NoteList from '../note-list';
const uuidv1 = require('uuid/v1');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note) {
    note.id = uuidv1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return { notes: [...previousState.notes, note] };
    });
  }

  handleRemoveNote(note) {
    this.setState(previousState => {
      return { notes: previousState.notes.filter(item => item.id !== note.id) };
    });
  }
  render() {
    return (
      <div className="dashboard">
        <p>This is the dashboard</p>
        <NoteForm handleAddNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote} />
      </div>
    );
  }
}

export default Dashboard;
