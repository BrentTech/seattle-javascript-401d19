import React from 'react';

let emptyState = {
    title : '',
    price : 0,
}

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.expense? this.props.expense : emptyState;
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //-------------------------------------------------------------
  // Member Functions
  //-------------------------------------------------------------
  handleSubmit(event){
    event.preventDefault();

    this.props.handleComplete(this.state);
    this.setState({
      title : '',
      price : 0,
    });
  }

  handleChange(event){
    let {name,value} = event.target;

    this.setState({
      [name] : value
    });
  }

  //-------------------------------------------------------------
  // Hooks
  //-------------------------------------------------------------

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense);
  }

  render(){
    let buttonText = this.props.expense ? 'Update' : 'Create';
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          type='number'
          name='price'
          placeholder='price'
          step='any'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;