const selectedFilmReducer = (selectedFilm = null, action) => {
  if (action.type === "FILM_SELECTED") {
    return action.payload;
  }

  return selectedFilm;
};

export default selectedFilmReducer;
