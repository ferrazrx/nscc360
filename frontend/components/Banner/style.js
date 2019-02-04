import styled from "styled-components";

const BannerContainer = styled.div`
  .content {
    color: #fff;
    padding: 70px 0;
    h1 {
      font-family: "Oswald", sans-serif;
      text-align: center;
      font-weight: 900;
      font-size: 4em;
    }
    h2:nth-of-type(1) {
      text-align: center;
      font-weight: 100;
      font-family: "Open Sans", sans-serif;
      font-size: 3.2em;
    }
    h2:nth-of-type(2) {
      text-align: center;
      font-weight: 500;
      font-family: "Open Sans", sans-serif;
    }
    .line {
      background: #fff;
      width: 60px;
      height: 2px;
      display: inline-block;
      margin: 10px 30px;
    }
    .button {
      display: block;
      margin: 0 auto;
      width: 150px;
      transition: 0.4s all;
    }
    .button:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
    }
  }
`;
export { BannerContainer };
