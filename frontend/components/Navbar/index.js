import React from "react";
import Link from "next/link";
import { Logo } from "./style";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link href="/">
        <a className="navbar-brand">
          <Logo src="/static/logo.svg" alt="NSCC 360 logo" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
          <Link href="/">
            <a className="nav-link px-3 border-right">
              Home
            </a>
          </Link>
          </li>
          <li className="nav-item">
          <Link href="/map">
            <a className="nav-link px-3 border-right">
              Tour
            </a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/map">
              <a className="nav-link px-3 border-right">Map</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
