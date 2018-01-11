import React from 'react';
import Modal from '../modal';
import ExpenseForm from '../expense-form';

class ExpenseItem extends React.Component{
  render(){
    let {expense,handleRemoveExpense,handleUpdateExpense} = this.props;

    let showModal = () => handleUpdateExpense({...expense,editing:true});
    let hideModal = () => handleUpdateExpense({...expense,editing:false});

    let updateAndClose = (expense) => {
      handleUpdateExpense({...expense,editing:false});
    };

    return(
      <div className='expense-item'>
        <strong>{expense.title}</strong> : ${expense.price}
        <button onClick={handleRemoveExpense.bind(null,expense)}> Remove </button>
        <button onClick={showModal}> Edit </button>
        <Modal handleClose={hideModal} show={expense.editing}>
          <h1>Editing {expense.title}</h1>
          <ExpenseForm handleComplete={updateAndClose} expense={expense} />
        </Modal>
      </div>
    );
  }
}

export default ExpenseItem;