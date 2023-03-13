import React from "react";
import "./navBar.css";
import { Link } from "react-scroll";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";
const NavBar = () => {
  const [click, setClick] = useState(true);
  const today = new Date();
  const weekdayString = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateString = today.toLocaleDateString("en-US", { day: "numeric" });
  const monthString = today.toLocaleDateString("en-US", { month: "long" });
  const yearString = today.getFullYear();
  return (
    <div className="NavBar">
      <div className="NavHeader">
        <div className="navHeaderContainer">
          <div className="nameLove">
            Trung <span>&</span> Hau
          </div>
          <div className="headerDate">
            {weekdayString}, {dateString} <span>{monthString}</span>{" "}
            {yearString}
          </div>
          <div
            className="menuIcon"
            onClick={() => {
              setClick(!click);
            }}
          >
            <ListIcon fontSize={"large"} style={{ color: "#e65959" }} />
          </div>
        </div>
      </div>
      <nav className={click ? "nav" : "nav open"}>
        <ul className="navContent">
          <li className="navLink" style={{ border: "none" }}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="navLink">
            <Link
              to="ourDay"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
            >
              Our Day
            </Link>
          </li>
          <li className="navLink">
            <Link to="" spy={true} smooth={true} offset={0} duration={500}>
              Our Memory
            </Link>
          </li>
          <li className="navLink">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
