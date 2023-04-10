import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";
import "./style.css";

const Menu = () => (
  <>
    <nav>
      <Link className="p" to="/">
        Home
      </Link>
      <Link className="p" to="register">
        Register
      </Link>
      <Link className="p" to="contact">
        Contact
      </Link>
    </nav>
  </>
);

export const Navbar = () => {
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <div className="volunteer__navbar">
        <div className="volunteer__navbar-links">
          <div className="volunteer__navbar-links_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="volunteer__navbar-links_container">
            <nav>{<Menu />}</nav>
          </div>
        </div>
        <div className="volunteer__navbar-sign">
          <Link className="login" to="login">
            Login
          </Link>
          <button className="btn" type="button">
            Sign up
          </button>
        </div>
        <div className="volunteer__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="volunteer__navbar-menu_container scale-up-center">
              <div className="volunteer__navbar-menu_container-links">
                <Menu />
                <div className="volunteer__navbar-menu_container-links-sign">
                  <Link className="login" to="login">
                    Login
                  </Link>
                  <>
                    <button
                      className="btn"
                      type="button"
                      onClick={() => navigate("signup")}
                    >
                      Sign up
                    </button>
                  </>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
