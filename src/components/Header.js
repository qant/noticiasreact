import React from "react";

const Header = ({ title }) => (
  <nav className="nav-wrapperlight-blue darken-3">
    <a href="/" className="brand-logo center">
      {title}
    </a>
  </nav>
);

export default Header;
