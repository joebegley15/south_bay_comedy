import { GET_SHOWS, ADD_SHOW, DELETE_SHOW } from "./types";

export const getShows = () => {
  return {
    type: GET_SHOWS
  };
};

export const deleteShow = id => {
  return {
    type: DELETE_SHOW,
    payload: id
  };
};
