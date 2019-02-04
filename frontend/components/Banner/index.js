import React from "react";
import { BannerContainer } from "./style";
import Video from "../Video";
import Navbar from "../Navbar";

export default function Banner(props) {
  console.log(props);
  return (
    <>
      <Video />
      <BannerContainer className="container">
        <Navbar />
        <div className="content">
          <h2>EXPLORE NSCC</h2>
          <h1>
            INSTITUTE OF
            <br />
            TECHNOLOGY
          </h1>
          <h2>
            <span className="line" />
            IN 360°
            <span className="line" />
          </h2>
          <div className="button">
            <img src="/static/button.svg" alt="look inside" />
          </div>
        </div>
      </BannerContainer>
    </>
  );
}
