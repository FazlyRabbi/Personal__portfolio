import React from "react";
import { NavigationDots, SocialMedia } from "../componests";

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames}`}
        style={{ minHeight: `${classNames}` }}
      >
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrapp;
