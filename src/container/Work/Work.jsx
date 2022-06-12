import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrapp, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { Link } from "react-router-dom";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [tag, setTag] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div>
        <h2 className="head-text mt-5rem">
          My Creative <span>Portfolio</span> Section
        </h2>

        <div className="app__work-filter">
          {["Web App", "React JS", "MERN", "All"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4>
                  <Link to={`/project/${work.title}`} className="work__title">
                    {work.title}
                  </Link>
                </h4>

                <p
                  style={{
                    marginTop: "0.5rem",
                    textAlign: "center",
                    color: "var(--black-color)",

                    fontSize: ".8rem",
                  }}
                >
                  {work.description}
                </p>

                <div className="app__flexe" style={{ marginTop: "1.5rem" }}>
                  {work.techTags.map((tag) => (
                    <p
                      className="p-text"
                      style={{
                        color: `${tag.split(" ")[1]}`,
                        marginRight: "0.5rem",
                        backgroundColor: `${tag.split(" ")[2]}`,
                        padding: "2px 6px",
                        borderRadius: "0.5rem",
                        marginTop: "0.6rem",
                      }}
                    >
                      {tag.split(" ")[0]}
                    </p>
                  ))}
                </div>

                {/* ================================ */}
                <div className="app__work-tag app__flex">
                  <p
                    className="p-text "
                    style={{ color: "var(--black-color)", fontWeight: "bold" }}
                  >
                    {work.tags[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapp(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
