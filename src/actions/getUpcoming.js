import { getUpcoming as getUpcomingQuery } from "../api/api";

const getUpcoming = page => async dispatch => {
  const topRatedFilms = await getUpcomingQuery(page);

  dispatch({
    type: "FETCH_FILMS",
    payload: topRatedFilms
  });
};

export default getUpcoming;
