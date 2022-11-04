const initialState = {
  isLoading: false,
  name: "",
  type: "",
  file: null,
  model: null,
  response: null,
  errors: null,
  description: null,
  histogram: null,
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "RESET":
      return { name: "", type: "", file: null, isLoading: false };

    case "ADD_NEW_MODEL":
      return { ...state, name: action.payload.name, type: action.payload.type };

    case "ADD_FILE":
      return { ...state, file: action.payload };

    case "GET_REVIEW_SUCCESS":
      return {
        ...state,
        isLoading: false,
        response: action.payload.response,
        model: action.payload.model,
        description: action.payload.description,
        histogram: action.payload.histogram,
        errors: null,
      };
    case "GET_REVIEW_FAIL":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
        model: null,
        response: null,
        description: null,
        histogram: null,
      };
    case "DELETE_MODEL_FAIL":
    case "DELETE_MODEL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errors: null,
        model: null,
        response: null,
        description: null,
        file: null,
        histogram: null,
      };

    case "SAVE_DESCRIPTION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        description: action.payload,
      };

    default:
      return state;
  }
};

export default modelReducer;
