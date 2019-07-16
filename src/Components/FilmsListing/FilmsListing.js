import React from "react";
import { connect } from "react-redux";
import { selectFilm, fetchFilms } from "../../actions";

class FilmsListing extends React.Component {
  componentDidMount() {
    this.props.fetchFilms("www");
  }

  render() {
    console.log(this.props);
    return this.props.filmsList.map(film => {
      return (
        <div key={film.id}>
          <span>{film.title}</span>
          <button type="button" onClick={() => this.props.selectFilm(film)}>
            Select
          </button>
        </div>
      );
    });
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
    fetchFilms
  }
)(FilmsListing);
