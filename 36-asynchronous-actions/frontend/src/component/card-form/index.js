import React from 'react';

let emptyState = { content : ''};

class CardForm extends React.Component {
 constructor(props){
   super(props);
   this.state = props.card || emptyState;
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(CardForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
 } 
  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------
  handleChange(event){
    this.setState({content : event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let sectionID = this.props.section ? this.props.section.id : this.props.card.sectionID;

    this.props.onComplete({
      ...this.state,
      sectionID,
    });

    this.setState(emptyState);
  }
  //---------------------------------------------------------------
  // Hooks
  //---------------------------------------------------------------
  componentWillReceiveProps(nextProps){
    if(nextProps.card)
      this.setState(nextProps.card)
  }

  render(){
    let buttonText = this.props.card ? 'update card' : 'create card';

    return(
      <form
        className='card-form'
        onSubmit={this.handleSubmit}
        >
        
        <input 
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'> {buttonText} </button>

      </form>
    );
  }
}

export default CardForm;