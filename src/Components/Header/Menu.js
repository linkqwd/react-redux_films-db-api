import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPopular, getTopRated, getUpcoming } from "../../actions";
import { URL } from "../../constants";

const Menu = props => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            onClick={() => props.getPopular()}
            to={URL.popular}
          >
            Popular
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            onClick={() => props.getTopRated()}
            to={URL.topRated}
          >
            Top rated
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            onClick={() => props.getUpcoming()}
            to={URL.upcoming}
          >
            Upcoming
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
    getTopRated,
    getUpcoming
  }
)(Menu);
