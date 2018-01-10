import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title : '',
      price : 0,
    };
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

    this.props.handleAddExpense(this.state);
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
  render(){
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
        <button type='submit'> create expense </button>
      </form>
    );
  }
}

export default ExpenseForm;