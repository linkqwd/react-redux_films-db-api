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
import debounce from "lodash.debounce";

class FilmsListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      error: false,
      hasMore: true,
      isLoading: false,
      films: []
    };

    window.onscroll = debounce(() => {
      const {
        loadFilms,
        state: { error, isLoading, hasMore }
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadFilms();
      }
    }, 100);
  }

  loadFilms = () => {
    console.log("loading");
    const n = this.state.currentPage + 1;
    this.setState({
      currentPage: n,
      films: [...this.props.filmsList, ...this.state.films]
    });
    this.props.fetchFilms(
      this.props.location.search.slice(3),
      this.state.currentPage
    );
  };

  componentDidMount() {
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
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.location.search !== prevState.location.search) {
      this.props.fetchFilms(
        this.props.location.search.slice(3),
        this.state.currentPage
      );
    }
  }

  render() {
    let { films } = this.state;
    if (films.length === 0) films = this.props.filmsList;
    console.log(films);

    return (
      <React.Fragment>
        <div>
          <strong>Total results: </strong>
          {this.props.totalResults}
        </div>
        <ul className="films-listing">
          {films.map((film, i) => (
            <li key={film.id + i} className="films-listing__item">
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
