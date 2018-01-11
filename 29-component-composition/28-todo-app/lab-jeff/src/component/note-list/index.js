import React from 'react';
import NoteItem from '../note-item';

//NOUN-SOMETHING
//Props : Yes
//Are we using props : Yes
//UI/View State vs App State vs NO State : NO
class NoteList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <h3> List of notes </h3>
        <ul>
          {this.props.notes.map((note, index) => (
            <NoteItem key={index} note={note} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NoteList;
