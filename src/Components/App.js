import "../styles/reset.css";
import "../styles/index.css";
import React from "react";
import HomePage from "./HomePage/HomePage";
import Header from "./Header/Header";
import FilmsListing from "./FilmsListing/FilmsListing";
import FilmDetails from "./FilmDetails/FilmDetails";
import { BrowserRouter, Route } from "react-router-dom";
import { URL } from "../constants";

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <header className="page__header">
          <Header />
        </header>
        <main className="page__main">
          <Route path={`/`} exact component={HomePage} />
          <Route path={`${URL.popular}`} component={FilmsListing} />
          <Route path={`${URL.topRated}`} component={FilmsListing} />
          <Route path={`${URL.upcoming}`} component={FilmsListing} />
          <Route path={`${URL.search}`} component={FilmsListing} />
          <Route path={`${URL.filmPage}`} component={FilmDetails} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
