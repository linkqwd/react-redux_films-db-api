import "../styles/reset.css";
import "../styles/index.css";
import React from "react";
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
          <Route path={`${URL.popular}`} exact component={FilmsListing} />
          <Route path={`${URL.topRated}`} exact component={FilmsListing} />
          <Route path={`${URL.search}`} exact component={FilmsListing} />
          <Route path={`${URL.filmPage}`} exact component={FilmDetails} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
