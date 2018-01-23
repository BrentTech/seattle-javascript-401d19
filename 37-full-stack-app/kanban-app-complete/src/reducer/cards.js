let emptyState = {};

export default (state = emptyState, {type, payload}) => {
  let sectionID,sectionCards,updatedCards,updatedState;

  switch(type){
    case 'SECTION_CREATE':
      return {...state, [payload.id] : [] };
    case 'SECTION_REMOVE':
      let updatedState = {...state};
      delete updatedState[payload.id];

      return updatedState;
    case 'CARD_CREATE':
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = [...sectionCards,payload];

      return {...state, [sectionID] : updatedCards};
    case 'CARD_UPDATE':
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = sectionCards.map(card => card.id === payload.id ? payload : card);

      return {...state, [sectionID] : updatedCards};
    case 'CARD_REMOVE':
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = sectionCards.filter(card => card.id !== payload.id);

      return {...state,[sectionID] : updatedCards };
     default:
      return state;
  }
};