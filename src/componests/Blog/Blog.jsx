import React from "react";
import Navbar from "../Navbar/Navbar";

function Blog() {
  return (
    <div>
      <Navbar
        position={"sticky"}
        boxShadow={`0 8px 32px 0 rgba(82, 81, 81, 0.089)`}
      />
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
        Comming Soon...
      </h1>
    </div>
  );
}

export default Blog;
