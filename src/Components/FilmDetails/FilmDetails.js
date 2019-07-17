import React from "react";
import { connect } from "react-redux";
import ImagesGallery from "./ImagesGallery";

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
        src={`http://image.tmdb.org/t/p/w185${film.poster_path}`}
      />
      <ImagesGallery filmId={film.id} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    film: state.selected
  };
};

export default connect(mapStateToProps)(FilmDetails);
