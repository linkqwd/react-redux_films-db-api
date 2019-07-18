import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPopular, getTopRated } from "../../actions";

const Menu = props => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            onClick={() => props.getPopular(1)}
            to="/popular"
          >
            Popular
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            onClick={() => props.getTopRated(1)}
            to="/top-rated"
          >
            Top rated
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default connect(
  null,
  {
    getPopular,
    getTopRated
  }
)(Menu);
