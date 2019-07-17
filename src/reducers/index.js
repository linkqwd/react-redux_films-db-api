import { combineReducers } from "redux";
import { default as listOfFilmsReducer } from "./listOfFilmsReducer";
import { default as selectedFilmReducer } from "./selectedFilmReducer";
import { default as imagesGalleryReducer } from "./imagesGalleryReducer";

export default combineReducers({
  filmsList: listOfFilmsReducer,
  selected: selectedFilmReducer,
  imagesGallery: imagesGalleryReducer
});
