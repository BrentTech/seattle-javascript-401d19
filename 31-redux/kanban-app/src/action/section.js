export const createAction = ({title}) => ({
  type: 'SECTION_CREATE',
  payload : {
    title,
    id: Math.random(),
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