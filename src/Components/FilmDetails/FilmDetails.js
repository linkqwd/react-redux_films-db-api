import React from "react";
import { connect } from "react-redux";
import ImagesGallery from "./ImagesGallery";
import { fetchFilmById } from "../../actions";
import defaultPicture from "../../images/defaultPicture.png";

const FilmDetails = props => {
  const { selectedFilm } = props;

  if (!selectedFilm) {
    props.fetchFilmById(props.match.params.film_id);
    return null;
  }

  console.log(props);

  return (
    <div className="film-page" key={selectedFilm.id}>
      <div className="film-page__wrapper">
        <img
          className="film-page__image"
          alt={`${selectedFilm.title}`}
          src={
            selectedFilm.poster_path
              ? `http://image.tmdb.org/t/p/w200${selectedFilm.poster_path}`
              : defaultPicture
          }
        />
        <div className="film-page__info">
          <strong>
            <h3>{selectedFilm.title}</h3>
          </strong>
          <br />
          <p>Released: {selectedFilm.release_date}</p>
          <br />
          <p>Overview:</p>
          <p>{selectedFilm.overview}</p>
        </div>
      </div>
      <div className="film-page__gallery">
        <ImagesGallery filmId={selectedFilm.id} />
      </div>
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
