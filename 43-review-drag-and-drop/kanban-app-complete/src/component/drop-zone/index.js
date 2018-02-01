import './_drop_zone.scss';
import React from 'react';

class DropZone extends React.Component{

  constructor(props){
    super(props);
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(DropZone.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  // constructor?
  // think about render function
  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------
  handleDragOver(event){
    event.preventDefault();
  }

  handleDrop(event){
    // vinicio - Parsing drag data can throw exceptions
    try{
      let dragData = JSON.parse(event.dataTransfer.getData('application/json'));
      // vinicio - the onComplete function will be the one to update the state/store
      this.props.onComplete(dragData);
    } catch(error){
      console.log('__BAD_DRAG_DATA',error);
    }
  }
  //---------------------------------------------------------------
  // Lifecycle Hooks
  //---------------------------------------------------------------
  render(){
    return(
      <div
        className='drop-zone'
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}>
        
        {this.props.children}
      </div>
    );
  }
}

// should I connect any information from the store
// export
export default DropZone;