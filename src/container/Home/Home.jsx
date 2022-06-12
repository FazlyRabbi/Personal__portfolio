import React from "react";
import { Navbar } from "../../componests";
import Header from "../Header/Header";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
// import Testimonials from "../Testimonials/Testimonials";

import About from "../About/About";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Navbar position={"fixed"} />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default Home;
