// https://api.themoviedb.org/3/search/movie?api_key=4ffeb4eab2389cd287b6ec32ed8da58e&query=redemption

const KEY = "4ffeb4eab2389cd287b6ec32ed8da58e";
const BASE_URL = "https://api.themoviedb.org/3/";

export const searchFilms = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`).then(
    response => response.json()
  );
};
