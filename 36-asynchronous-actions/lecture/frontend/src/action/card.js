import superagent from 'superagent';

// synchronous action creators
export const createAction = ({content,sectionID}) => ({
  type: 'CARD_CREATE',
  payload : {
    content,
    sectionID,
    id: btoa(Math.random()),
  }
});

export const updateAction = (card) => ({
  type : 'CARD_UPDATE',
  payload : card,
});

export const removeAction = (card) => ({
  type : 'CARD_REMOVE',
  payload : card,
});
