import React from "react";

function Header() {
  return (
    <>
      <div className="navbar navbar-glass fixed w-full z-50">
        <div className="navbar-start">
          <a
            className="navbar-item text-primary text-xl"
            style={{ fontFamily: "'Lumanosimo', cursive" }}
            href="/"
          >
            Ahmed Ezzt
          </a>
        </div>
        <div className="navbar-center">
          <a
            className="navbar-item cursor-pointer hover:text-primary transition-all duration-300"
            href="/"
          >
            About
          </a>
          <a
            className="navbar-item cursor-pointer hover:text-primary transition-all duration-300"
            href="/"
          >
            Projects
          </a>
          <a
            className="navbar-item cursor-pointer hover:text-primary transition-all duration-300"
            href="/"
          >
            Skills
          </a>
        </div>
        <div className="navbar-end">
          <h3 className="p-4 text-sm text-darkText bg-primary rounded-full cursor-pointer hover:bg-darkAccent shadow-lg transition-colors duration-300">
            Contact Me
          </h3>
        </div>
      </div>
    </>
  );
}

export default Header;
