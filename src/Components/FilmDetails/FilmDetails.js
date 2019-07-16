import React from "react";
import { connect } from "react-redux";

const FilmDetails = ({ film }) => {
  if (!film)
    return (
      <div>
        <strong>Details For:</strong>
        <br /> No selected Films
      </div>
    );
  return (
    <div>
      <strong>Details For:</strong>
      <h3>{film.title}</h3>
      <p>Overview:</p>
      <p>{film.overview}</p>
      <p>Picture:</p>
      <img
        alt={`${film.title}`}
        src={`http://image.tmdb.org/t/p/w185/${film.poster_path}`}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    film: state.selected
  };
};

export default connect(mapStateToProps)(FilmDetails);
