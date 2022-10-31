export const addNewModel = (name, type) => (dispatch, getState) => {
  dispatch({ type: "ADD_NEW_MODEL", payload: { name, type } });
};

export const addDataSet = (file) => (dispatch, getState) => {
  dispatch({ type: "ADD_FILE", payload: file });
};
