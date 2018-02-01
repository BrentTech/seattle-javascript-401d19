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
    case 'CARD_UPDATE_SECTION_ID':
      // vinicio - setting helper variables
      let card = payload.card;
      let oldSectionID = card.sectionID;

      // vinicio - setting up sectionID change
      if(oldSectionID === payload.sectionID)
        return state;
      
      // vinicio - updating section array
      let oldSection = state[oldSectionID].filter(item => item.id !== card.id);
      card.sectionID = payload.sectionID;
      // vinicio - adding the card to its new category
      // vinicio - here we define the order as well
      //let newSection = [card,...state[payload.sectionID]];
      let newSection = [...state[payload.sectionID],card];

      return{
        ...state,
        [oldSectionID]: oldSection,
        [card.sectionID]: newSection,
      };
     default:
      return state;
  }
};