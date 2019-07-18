import React from "react";
import { connect } from "react-redux";
import ImagesGallery from "./ImagesGallery";
import { fetchFilmById } from "../../actions";

const FilmDetails = props => {
  const { selectedFilm } = props;

  if (!selectedFilm) {
    props.fetchFilmById(props.match.params.film_id);
    return null;
  }

  return (
    <div key={selectedFilm.id}>
      <strong>Details For:</strong>
      <h3>{selectedFilm.title}</h3>
      <p>Overview:</p>
      <p>{selectedFilm.overview}</p>
      <p>Picture:</p>
      <img
        alt={`${selectedFilm.title}`}
        src={`http://image.tmdb.org/t/p/w185${selectedFilm.poster_path}`}
      />
      <ImagesGallery filmId={selectedFilm.id} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedFilm: state.selected
  };
};

export default connect(
  mapStateToProps,
  { fetchFilmById }
)(FilmDetails);
