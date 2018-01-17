let emptyState = {};

export default(state = emptyState, action) => {
  let {type,payload} = action;
  let sectionID = null,sectionCards = null,updatedCards = null;

  // vinicio - maintaining only the card object
  switch(type){
    case 'SECTION_CREATE':
      return {...state, [payload.id] : []};
    case 'SECTION_REMOVE':
      // TODO : error checking
      let updatedState = {...state};
      delete updatedState[payload.id];

      return updatedState;
    case 'CARD_CREATE':
      // TODO : error checking
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = [...sectionCards, payload];

      return {...state,[sectionID]: updatedCards};
    case 'CARD_UPDATE':
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = sectionCards.map(card => card.id === payload.id ? payload : card);

      return {...state,[sectionID]: updatedCards};
    case 'CARD_REMOVE':
      sectionID = payload.sectionID;
      sectionCards = state[sectionID];
      updatedCards = sectionCards.filter(card => card.id !== payload.id);

      return {...state,[sectionID]: updatedCards};
    default:
      return state;
  }
};
