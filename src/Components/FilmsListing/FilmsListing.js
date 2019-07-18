import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectFilm, getPopular, getTopRated } from "../../actions";
import { URL } from "../../constants";

class FilmsListing extends React.Component {
  componentDidMount() {
    switch (this.props.match.path) {
      case URL.popular:
        this.props.getPopular(1);
        break;
      case URL.topRated:
        this.props.getTopRated(1);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <ul className="films-listing">
        {this.props.filmsList.map(film => (
          <li className="films-listing__item" key={film.id}>
            <span className="films-listing__title">{film.title}</span>
            <Link
              to={`${URL.film}${film.id}`}
              className="films-listing__link"
              onClick={() => this.props.selectFilm(film)}
            >
              Select
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    filmsList: state.filmsList,
    selected: state.selected
  };
};

export default connect(
  mapStateToProps,
  {
    selectFilm,
    getPopular,
    getTopRated
  }
)(FilmsListing);
