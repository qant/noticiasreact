import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <nav className="nav-wrapperlight-blue darken-3">
    <a href="/" className="brand-logo center">
      {title}
    </a>
  </nav>
);

Header.propType = {
  title: PropTypes.string.isRequired
};

export default Header;
