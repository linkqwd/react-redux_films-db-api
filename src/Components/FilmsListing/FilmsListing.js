import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectFilm,
  getPopular,
  getTopRated,
  fetchFilms,
  getUpcoming
} from "../../actions";
import { URL } from "../../constants";
import Pagination from "./Pagination";
import defaultPicture from "../../images/defaultPicture.png";

class FilmsListing extends React.Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.getFilmsData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.getFilmsData();
    }

    if (this.props.location.search !== prevProps.location.search) {
      this.props.fetchFilms(
        this.props.location.search.slice(3),
        this.state.currentPage
      );
    }
  }

  getFilmsData = () => {
    switch (this.props.match.path) {
      case URL.popular:
        this.props.getPopular(this.state.currentPage);
        break;
      case URL.topRated:
        this.props.getTopRated(this.state.currentPage);
        break;
      case URL.upcoming:
        this.props.getUpcoming(this.state.currentPage);
        break;
      case URL.search:
        this.props.fetchFilms(
          this.props.location.search.slice(3),
          this.state.currentPage
        );
        break;
      default:
        break;
    }
  };

  paginationClickHandler = e => {
    this.setState({ currentPage: +e.target.dataset.count });
  };

  render() {
    return (
      <React.Fragment>
        <div className="list-info">
          <strong>Total result: </strong>
          {this.props.totalResults ? this.props.totalResults : `searching...`}
        </div>

        <ul className="films-listing">
          {this.props.filmsList.map((film, i) => (
            <li key={film.id} className="films-listing__item">
              <Link
                to={`${URL.film}${film.id}`}
                onClick={() => this.props.selectFilm(film)}
              >
                <img
                  loading="lazy"
                  className="films-listing__image"
                  alt={`pic${i}`}
                  src={
                    film.poster_path
                      ? `http://image.tmdb.org/t/p/w200${film.poster_path}`
                      : defaultPicture
                  }
                />
              </Link>

              <div className="films-listing__info">
                <div className="films-listing__title">{film.title}</div>
                <div className="">
                  Rating: {film.vote_average} / Votes: {film.vote_count}
                </div>
                <div className="">Release: {film.release_date}</div>
                <div className="">
                  Original language: {film.original_language}
                </div>
                <Link
                  to={`${URL.film}${film.id}`}
                  className="films-listing__link"
                  onClick={() => this.props.selectFilm(film)}
                >
                  More
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <Pagination
          onClick={this.paginationClickHandler}
          pagesTotal={this.props.totalPages}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.filmsList.page,
    totalPages: state.filmsList.total_pages,
    totalResults: state.filmsList.total_results,
    filmsList: state.filmsList.results || [],
    selected: state.selected
  };
};

export default connect(
  mapStateToProps,
  {
    selectFilm,
    getPopular,
    getTopRated,
    fetchFilms,
    getUpcoming
  }
)(FilmsListing);
