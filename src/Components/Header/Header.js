import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Route } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <Menu />
      <Route component={SearchBar} />
    </React.Fragment>
  );
};

export default Header;
