import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { Component } from 'react';
import MenuItems from "./MenuItems.js";
import "./Navbar.css";
import { Button } from "../Button"
const PUBLIC_URL = process.env.PUBLIC_URL

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">

        <Link to="/"><img src={PUBLIC_URL + 'logo.png'} style={{ height: "55px" }} className="saleng-logo" /></Link>
        <Link to="/"><h1 className="nav-logo">aleng.th </h1></Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map(function (item, index) {
            return (
              <li key={index} >
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

      </nav >
    )
  }
}

export default Navbar;