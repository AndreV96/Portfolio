import React from "react";

import Navigation from "./Navigation";

function Header(props) {
  return (
    <div className="App">
      <Navigation currentPage = {props.currentPage} setCurrentPage = {props.setCurrentPage} />
    </div>
  );
}

export default Header;