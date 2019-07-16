import { combineReducers } from "redux";
import { default as listOfFilmsReducer } from "./listOfFilmsReducer";
import { default as selectedFilmReducer } from "./selectedFilmReducer";

export default combineReducers({
  filmsList: listOfFilmsReducer,
  selected: selectedFilmReducer
});
