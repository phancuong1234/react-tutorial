import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
