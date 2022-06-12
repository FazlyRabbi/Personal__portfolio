import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Navbar = ({ position, boxShadow }) => {
  const [toggle, setToggle] = useState(false);

  const myNav = (
    <>
      <li className="app__flex p-text">
        <Link to="/">home</Link>
      </li>
      <li className="app__flex p-text">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="app__flex p-text">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav
      className="app__navbar"
      style={{ position: `${position}`, boxShadow: `${boxShadow}` }}
    >
      <div className="app__navbar-logo">
        <Link to="/">
          <a href="#home">
            <img src={images.logo} alt="logo" />
          </a>
        </Link>
      </div>

      <ul className="app__navbar-links">{myNav}</ul>

      <SocialMedia />

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          style={{ cursor: "pointer" }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => setToggle(false)}
              style={{ cursor: "pointer" }}
            />

            <ul>
              {myNav}
              <li style={{ cursor: "pointer" }}>
                <a
                  href="https://www.linkedin.com/in/fazlul-karim-rabbi"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/FazlyRabbi" target="_blank">
                  <AiFillGithub />
                </a>
                <a href="https://twitter.com/qexle_smm" target="_blank">
                  <BsTwitter />
                </a>
                <a
                  href="https://www.facebook.com/rabbi.stuent/"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
