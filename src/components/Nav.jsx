import { useState } from "react";
import logo from "../assets/images/taz-logo.png";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

function Nav() {
  const navItems = [
    { link: "", text: "About" },
    { link: "", text: "Services" },
    { link: "", text: "Projects" },
    { link: "", text: "How we work" },
    { link: "", text: "Contact" },
    { link: "", text: "Team" },
  ];
  const navigateTo = useNavigate();

  return (
    <nav>
      <div className="nav-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="taz creative logo"
            onClick={() => {
                navigateTo("/");
              }}
          />
        </div>

        <ul>
          {navItems.map(({ text, link }, index) => {
            return (
              <li key={index} className="nav-link">
                <Link to={link}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
