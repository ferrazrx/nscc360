import React from "react";
import { BannerContainer } from "./style";
import Video from "../Video";
import Navbar from "../Navbar";
import Link from "next/link";

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
            <Link href="/map">
              <a>
                <img src="/static/button.svg" alt="look inside" />
              </a>
            </Link>
          </div>
        </div>
      </BannerContainer>
    </>
  );
}
