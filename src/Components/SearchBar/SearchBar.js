import React from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../actions";

const SearchBar = ({ searchTerm, onChange, fetchFilms }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          fetchFilms(searchTerm);
        }}
      >
        <label>
          Search
          <input
            onChange={onChange}
            value={searchTerm}
            placeholder="Search for a film"
            type="search"
          />
        </label>
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    fetchFilms
  }
)(SearchBar);
