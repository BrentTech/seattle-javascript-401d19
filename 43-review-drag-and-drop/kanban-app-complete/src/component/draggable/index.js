import React from 'react';
import dragPhoto from '../../asset/drag.jpg';

let image = document.createElement('img');
image.src = dragPhoto;
console.log(dragPhoto);

class Draggable extends React.Component{
  //1 constructor? --> state or binding functions
  constructor(props){
    super(props);
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Draggable.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //4 render function --> Components MUST have a render function
  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------
  // vinicio - BAD variable names: fun, fn, cb, res, req, e,
  // Code Complete recommends variable names of size 10 - 16 for debugging
  handleDragStart(event){
    event.dataTransfer.setData('application/json',JSON.stringify(this.props.data));
    event.dataTransfer.setDragImage(image,0,0);
  }
  //---------------------------------------------------------------
  // Lifecycle Hooks
  //---------------------------------------------------------------

  render(){
    return(
      <div draggable onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    );
  }
}

//2 do we need to connect this component into the store?
//3 export

export default Draggable;