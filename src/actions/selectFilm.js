const selectFilm = film => {
  return {
    type: "FILM_SELECTED",
    payload: film
  };
};

export default selectFilm;
