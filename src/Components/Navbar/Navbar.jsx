import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-darkblue py-4">
        <div className="container">
          <Link className="navbar-brand fs-2 text-white" to="/">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex column-gap-4">
              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0"
                  aria-current="page"
                  to="portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
