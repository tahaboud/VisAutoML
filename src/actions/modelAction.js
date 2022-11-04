import axios from "axios";
import Cookies from "js-cookie";
import { dummyData } from "./dummyData";

export const reset = () => (dispatch, getState) => {
  dispatch({ type: "RESET" });
};

export const addNewModel = (name, type) => (dispatch, getState) => {
  dispatch({ type: "ADD_NEW_MODEL", payload: { name, type } });
};

export const addDataSet = (file) => (dispatch, getState) => {
  dispatch({ type: "ADD_FILE", payload: file.name });
};

export const getReview = (file) => (dispatch, getState) => {
  dispatch({ type: "LOADING" });
  const csrfToken = Cookies.get("csrftoken");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-CSRFToken": csrfToken,
    },
  };

  const formData = new FormData();
  formData.append("data_set", file);
  formData.append("model_name", getState().model.name);
  formData.append(
    "model_type",
    getState().model.type === "Regression" ? "RG" : "CL"
  );

  dispatch({ type: "GET_REVIEW_SUCCESS", payload: dummyData });

  // axios
  //   .post("api/", formData, config)
  //   .then((res) => {
  //     dispatch({ type: "GET_REVIEW_SUCCESS", payload: res.data });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: "GET_REVIEW_FAIL", payload: err.response.data });
  //   });
};

export const deleteModel = () => (dispatch, getState) => {
  dispatch({ type: "LOADING" });
  const id = getState().model.model.id;
  const csrfToken = Cookies.get("csrftoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken,
    },
  };
  axios
    .delete(`api/${id}/`, config)
    .then((res) => {
      dispatch({ type: "DELETE_MODEL_SUCCESS" });
    })
    .catch((err) => dispatch({ type: "DELETE_MODEL_FAIL" }));
};

export const saveDescription = (description) => (dispatch, getState) => {
  dispatch({ type: "LOADING" });
  const csrfToken = Cookies.get("csrftoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken,
    },
  };
  const descr = JSON.stringify({ description });
  const id = getState().model.description.id;
  axios
    .patch(`api/description/${id}/`, descr, config)
    .then((res) => {
      dispatch({ type: "SAVE_DESCRIPTION_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
