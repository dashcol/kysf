import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navIcon1 from "../../../assets/img/nav-icon1.svg";
import navIcon2 from "../../../assets/img/github-brands.svg";
import navIcon3 from "../../../assets/img/nav-icon3.svg";
import logo from "../../../assets/img/logo2.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClickUpdatelink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              onClick={() => onClickUpdatelink("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
