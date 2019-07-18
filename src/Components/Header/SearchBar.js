import React from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../actions";
import { URL } from "../../constants";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    if (this.props.location.search)
      this.props.fetchFilms(this.props.location.search.slice(3));
  }

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.fetchFilms(this.state.searchTerm);
    this.props.history.push(`${URL.searchTerm}${this.state.searchTerm}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <input
              onChange={this.handleInputChange}
              value={this.state.searchTerm}
              placeholder="Search for a film"
              type="search"
            />
          </label>
          <button type="submit">Find</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fetchFilms: state.fetchFilms };
};

export default connect(
  mapStateToProps,
  {
    fetchFilms
  }
)(SearchBar);
