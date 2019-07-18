import { getPopular as getPopularQuery } from "../api/api";

const getPopular = page => async dispatch => {
  const popularFilms = await getPopularQuery(page);

  dispatch({
    type: "FETCH_FILMS",
    payload: popularFilms
  });
};

export default getPopular;
