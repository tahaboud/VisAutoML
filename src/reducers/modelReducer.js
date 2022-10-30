const initialState = {
  name: "",
  type: "",
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_MODEL":
      return { ...state, name: action.payload.name, type: action.payload.type };

    default:
      return state;
  }
};

export default modelReducer;
