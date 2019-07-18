import { fetchFilmById as fetchFilmByIdQuery } from "../api/api";

const fetchFilmById = searchTerm => async dispatch => {
  const film = await fetchFilmByIdQuery(searchTerm);

  dispatch({
    type: "FILM_SELECTED",
    payload: film
  });
};

export default fetchFilmById;
