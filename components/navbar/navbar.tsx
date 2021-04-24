import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand font-weight-bold">DeltaCraft</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page" href="#">
                  Domů
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#current-season">
                <a className="nav-link" aria-current="page" href="#">
                  Aktuální season
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#join-us">
                <a className="nav-link" aria-current="page" href="#">
                  Přidej se k nám
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Ostatní sezóny
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/season/s1">
                    <a className="dropdown-item">Season 1: Settlers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/season/s2">
                    <a className="dropdown-item">Season 2: Innovators</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
