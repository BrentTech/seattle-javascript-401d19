const emptyState = [];

const validateSection = (section) => {
  if(!section.title)
    throw new Error('section requires a title');
};

export default (state = emptyState, {type,payload}) => {
  // vinicio - We are assuming that payload is a section
  switch(type){
    case 'SECTION_CREATE':
      validateSection(payload);
      return [...state,payload];
    case 'SECTION_UPDATE':
      return state.map(section => section.id === payload.id ? payload : section);
    case 'SECTION_REMOVE':
      return state.filter(section => section.id !== payload.id);
    case 'SECTION_CLEAR':
      return emptyState;
    default:
      return state;
  }
};