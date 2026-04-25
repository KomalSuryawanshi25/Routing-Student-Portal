import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-3 fw-bold ">
        <div className="container justify-content-center">
          <Link className="navbar-brand" to="/">
            🎓 Student Course Portal
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;