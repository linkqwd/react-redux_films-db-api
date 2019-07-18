import { searchFilms } from "../api/api";

const fetchFilms = (searchTerm, page) => async dispatch => {
  const films = await searchFilms(searchTerm, page);

  dispatch({
    type: "FETCH_FILMS",
    payload: films
  });
};

export default fetchFilms;
