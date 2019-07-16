import { searchFilms } from "../api/api";

const fetchFilms = searchTerm => async dispatch => {
  const films = await searchFilms(searchTerm);

  dispatch({
    type: "FETCH_FILMS",
    payload: films.results
  });
};

export default fetchFilms;
