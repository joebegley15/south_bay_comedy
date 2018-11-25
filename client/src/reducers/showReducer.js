import uuid from "uuid";
import {
  GET_SHOWS,
  ADD_SHOW,
  DELETE_SHOW,
  SHOWS_LOADING
} from "../actions/types";

const initialState = {
  shows: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state
      };
    case DELETE_SHOW:
      console.log(state.shows.filter(item => item.id != action.payload));
      return {
        ...state,
        shows: state.shows.filter(item => item.id != action.payload)
      };
    case SHOWS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return {
        ...state
      };
  }
}
