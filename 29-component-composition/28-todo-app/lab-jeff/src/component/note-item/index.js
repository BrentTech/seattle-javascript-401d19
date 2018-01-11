import React from 'react';

//Props : Yes
//Are we using props : Yes
//UI/View State vs App State vs NO State : No State
class NoteItem extends React.Component {
  render() {
    let { id, title, content } = this.props.note;
    return (
      <div>
        <li className="note-item">
          {title}: {content}
        </li>
        <button
          type="click"
          onClick={ this.props.handleRemoveNote.bind(null,this.props.note)
          } >
					Delete
        </button>
      </div>
    );
  }
}

export default NoteItem;
