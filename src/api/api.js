// https://api.themoviedb.org/3/search/movie?api_key=4ffeb4eab2389cd287b6ec32ed8da58e&query=redemption

const KEY = "4ffeb4eab2389cd287b6ec32ed8da58e";
const BASE_URL = "https://api.themoviedb.org/3/";

export const searchFilms = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`).then(
    response => response.json()
  );
};

export const fetchFilmById = filmId => {
  return fetch(`${BASE_URL}movie/${filmId}?api_key=${KEY}&language=en-US`).then(
    response => response.json()
  );
};

export const searchFilmsImages = filmId => {
  return fetch(
    `${BASE_URL}movie/${filmId}/images??language=en-US&api_key=${KEY}`
  ).then(response => response.json());
};

export const getPopular = (page = 1) => {
  return fetch(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=${page}`
  ).then(response => response.json());
};

export const getTopRated = (page = 1) => {
  return fetch(
    `${BASE_URL}movie/top_rated?api_key=${KEY}&language=en-US&page=${page}`
  ).then(response => response.json());
};
