const initialState = {
  name: "",
  type: "",
  file: null,
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET":
      return { name: "", type: "", file: null };

    case "ADD_NEW_MODEL":
      return { ...state, name: action.payload.name, type: action.payload.type };

    case "ADD_FILE":
      return { ...state, file: action.payload };

    default:
      return state;
  }
};

export default modelReducer;
