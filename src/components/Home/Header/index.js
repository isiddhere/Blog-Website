import "./styles.css";

import React from "react";

const Header = () => {
  return (
    <div className="home-header">
      <h1>Namaste India</h1>
      <h2>to The</h2>
      <h2 className="style__Blog">
        <span> " </span>Blog<span> "</span>
      </h2>
      <p>
        Awesome place to be productive
        <br />
        and entertained through daily updates
      </p>
    </div>
  );
};

export default Header;
