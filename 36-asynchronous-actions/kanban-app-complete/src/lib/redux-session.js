export default store => next => action => {
  let result = next(action);// vinicio - making sure the chain completes
  let state = store.getState(); // vinicio - getting the final state 

  for(let key in state){
    localStorage[key] = JSON.stringify(state[key]);
  }
  return result;
}