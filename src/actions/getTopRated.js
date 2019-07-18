import { getTopRated as getTopRatedQuery } from "../api/api";

const getTopRated = page => async dispatch => {
  const topRatedFilms = await getTopRatedQuery(page);

  dispatch({
    type: "FETCH_FILMS",
    payload: topRatedFilms.results
  });
};

export default getTopRated;
