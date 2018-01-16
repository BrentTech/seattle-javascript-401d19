'use strict';

let {createStore} = require('redux');

const DEFAULT_STATE = 0;

let simpleReducer = (state = DEFAULT_STATE,action) => {
  //let {type, payload} = action;
  let {type,payload} = action;

  switch(type){
    case 'INCREMENT_COUNTER':
      return state + payload;
    case 'DECREMENT_COUNTER':
      return state - payload;
    default:
      return state;
  }
};

// let state = simpleReducer(undefined,{type:undefined});
// console.log({state});

// state = simpleReducer(state,{type:'INCREMENT_COUNTER'});
// state = simpleReducer(state,{type:'DECREMENT_COUNTER'});
// console.log({state});

let customStore = createStore(simpleReducer);
console.log(customStore);
console.log(customStore.getState());

customStore.dispatch({type:'INCREMENT_COUNTER'});
customStore.dispatch({type:'INCREMENT_COUNTER',payload:28});
console.log(customStore.getState());
