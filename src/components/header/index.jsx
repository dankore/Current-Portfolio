import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Adamu M. Dankore"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Adamu M. Dankore</h1>
        <h2>Software Engineer from Iowa, United States.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
