import React from "react";
import { AppWrapp, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ height: "auto", width: "150px" }}
          />
        </div>
        <div>
          <h2 style={{ color: "var(--black-color)", fontSize: "1rem" }}>
            Copythight © All Rights Reserved.
          </h2>
        </div>
      </div>
    </>
  );
};

export default AppWrapp(MotionWrap(Footer, "app__footer"), "contact", "60%");
