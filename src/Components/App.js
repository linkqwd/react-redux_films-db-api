import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import FilmsListing from "./FilmsListing/FilmsListing";
import FilmDetails from "./FilmDetails/FilmDetails";

class App extends React.Component {
  state = {
    searchTerm: "red"
  };

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <FilmsListing />
        <FilmDetails />
      </React.Fragment>
    );
  }
}

export default App;
