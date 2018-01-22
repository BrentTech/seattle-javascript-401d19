const thunk = store => next => action => {
  if (typeof(action) === 'function') {
    return action(store)
  } else {
    return next(action);
  }
};

export default thunk;