import React from "react";

export const Nav = () => {
    const navlayout = {
        width: '100vw'
    }
  return (
    <section id="main-nav">
      <nav
        className="navbar navbar-light bg-secondary justify-content-between"
        style={navlayout}
      >
        <a href className="navbar-brand">
          <img
            src={require("../Website Assests/Branding/UCP Colour Logo Landscape (transparent background).png")}
            alt=""
            height="75px;"
          />
        </a>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </section>
  );
};

export default Nav;
