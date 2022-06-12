import React, { useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Contact.scss";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app__whitebg">
      <Navbar
        position={"sticky"}
        boxShadow={`0 8px 32px 0 rgba(82, 81, 81, 0.089)`}
      />
      <h2 className="head-text" style={{ marginTop: "3rem" }}>
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:rabbisam74@gmail.com" className="p-text">
            rabbisam74@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+8801992151537" className="p-text">
            +880 1992151537
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form">
          <div className="app__flex justify-left ">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex justify-left ">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text color-secondary">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact;
