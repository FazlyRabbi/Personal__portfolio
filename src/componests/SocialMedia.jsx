import React from "react";

import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social" style={{ cursor: "pointer" }}>
      <div>
        <a
          href="https://www.linkedin.com/in/fazlul-karim-rabbi"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/FazlyRabbi" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/qexle_smm" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/rabbi.stuent/" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
