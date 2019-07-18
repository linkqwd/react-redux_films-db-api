import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <Link className="logo header__logo" to="/">
        Home
      </Link>
      <Menu />
      <Route component={SearchBar} />
    </React.Fragment>
  );
};

export default Header;
