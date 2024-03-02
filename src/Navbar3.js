// JavaScript Document
import React, { Component } from "react";
import "./navbar3.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  

  componentDidMount() {
    console.log(document.querySelector("#nav-toggle"));
    console.log(this.props.history);
    this.props.history.listen((location) => {
      console.log("You have changed page");
      document.querySelector("#nav-toggle").checked = false;
    });
  }
  
  render() {
    return (
      <div className="navbar">
        <input id="nav-toggle" type="checkbox" />
        <img
          className="logo"
          src="https://i.ibb.co/Dg4r5Gt/logo.png"
          alt="LOGO"
        />

        <ul className="nav-list">
          <Link exact to="/" className="item">
            Home
          </Link>
          <Link to="/Profile" className="item">
            Profile
          </Link>
          <Link to="/Map" className="item">
            Map
          </Link>
          {!this.props.isLoggedIn ? (
            <Link to="/SignIn" className="item">
              Sign In
            </Link>
          ) : null}

          <Link to="/about" className="item">
            About
          </Link>
         
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </div>
    );
  }
}
export default Navbar;
