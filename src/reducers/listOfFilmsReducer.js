const listOfFilmsReducer = (listOfFilms = [], action) => {
  if (action.type === "FETCH_FILMS") {
    return action.payload;
  }

  return listOfFilms;
};

export default listOfFilmsReducer;
