import axios from "axios";
import { GET_SHOWS, ADD_SHOW, DELETE_SHOW, SHOWS_LOADING } from "./types";

export const getShows = () => dispatch => {
  dispatch(setShowsLoading());
  axios.get("/api/shows").then(res => {
    console.log(res.data);
    dispatch({ type: GET_SHOWS, payload: res.data });
  });
};

export const deleteShow = id => {
  return {
    type: DELETE_SHOW,
    payload: id
  };
};

export const setShowsLoading = () => {
  return {
    type: SHOWS_LOADING
  };
};
