import React from "react";

import { motion } from "framer-motion";

import { AppWrapp } from "../../wrapper";

import { images } from "../../constants";

import TypeAnimation from "react-type-animation";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋</span>  */}
            <div>
              <h2 className="heading-secondary">Hello, I am </h2>

              <TypeAnimation
                cursor={false}
                sequence={["Fazlul Karim", 1000]}
                wrapper="h1"
                className="head-text text-left"
              />
              <p className="p-text" style={{ textAlign: "justify" }}>
                I am a Programing lover and self-taught JavaScript Web
                Developer. Practising ES6, React, Node, MongoDB, Express, Rest
                API, Material UI, SASS, JSON, etc.
              </p>
            </div>
          </div>
          {/* <div className="tag-cmp app__flex">
            <p className="p-text">javaScript</p>
            <p className="p-text">Developer</p>
          </div> */}
          <div className="tag-cmp download">
            <a href="https://drive.google.com/u/0/uc?id=141y_s5bHYb9x2iipZCD61ujQYr1YRND6&export=download">
              download resume
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />

        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        /> */}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.javascript, images.node].map((circle) => (
          <div className="circle-cmp app__flex" key={circle.index}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapp(Header, "home");
