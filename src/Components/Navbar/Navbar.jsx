import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (value) => {
    setMenu(value);
    setIsOpen(false); // close mobile menu when clicking a link
  };

  return (
    <div className="navbar">
      {/* logo / name */}
      <h1 className="nav-logo">YS</h1>

      {/* mobile open icon */}
      <img
        src={menu_open}
        alt="open menu"
        className="nav-mob-open"
        onClick={handleToggle}
      />

      {/* menu list */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        {/* mobile close icon */}
        <img
          src={menu_close}
          alt="close menu"
          className="nav-mob-close"
          onClick={handleToggle}
        />

        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            offset={50}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#about"
            offset={50}
            onClick={() => handleMenuClick("about")}
          >
            About Me
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#project"
            offset={50}
            onClick={() => handleMenuClick("project")}
          >
            Project
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#contact"
            offset={50}
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>

      {/* right side button (hidden on mobile) */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;


