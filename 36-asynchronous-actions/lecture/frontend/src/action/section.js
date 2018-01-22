import superagent from 'superagent';

// synchronous action creators
export const createAction = ({title}) => ({
  type: 'SECTION_CREATE',
  payload : {
    title,
    id: btoa(Math.random()),
    createdOn: new Date(),
  }
});

export const updateAction = (section) => ({
  type : 'SECTION_UPDATE',
  payload : section,
});

export const removeAction = (section) => ({
  type : 'SECTION_REMOVE',
  payload : section,
});

// asynchronous action creators
export const getNotes = () => (dispatch) => {
  console.log('DISPATCH:', dispatch)
  console.log('DOING AJAX')
  return superagent.get('http://localhost:3000/api/notes')
  .then((response) => {
    console.log('AJAX DONE', response);
    let count = response.body.count;
    let data = response.body.data;
    dispatch(createAction({title: 'Celebration!'}));
  });
};