export const addNewModel = (name, type) => (dispatch, getState) => {
  dispatch({ type: "ADD_NEW_MODEL", payload: { name, type } });
};
