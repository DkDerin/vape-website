import React from "react";
import "../headers/header.css";
import peachIce from "../../assets/peach-ice.png";

export const Header = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h1 className="display-4 fw-bold header-title">KINGS NORDIC</h1>
            <p className="header-p">
              You don't need to read this. Now that you hav decided to read it
              anyways, its just some random dummy text to fill up the space for
              Bootstrap banner or hero section.
            </p>
            <div className="pt-3">
              <a className="but" href="#products">
                VÅRA SMAKER
              </a>
              <a className="but-2" href="#products">
                OM OSS
              </a>
            </div>
          </div>
          <div className="col-sm-7">
            <img className="img-fluid" src={peachIce} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
