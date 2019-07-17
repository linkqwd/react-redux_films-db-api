import { searchFilmsImages } from "../api/api";

const fetchFilmImages = filmId => async dispatch => {
  const images = await searchFilmsImages(filmId);
  const allImages = images.backdrops.concat(images.posters);

  dispatch({
    type: "FETCH_FILM_IMAGES",
    payload: allImages
  });
};

export default fetchFilmImages;
