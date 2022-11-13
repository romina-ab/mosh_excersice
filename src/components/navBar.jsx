import React from "react";

const NavBar = (props) => {
  const {totalCount}=props;
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {totalCount}
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
