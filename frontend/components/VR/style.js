import styled from "styled-components";

const IFrame = styled.iframe`
  height: 100vh;
  z-index: -100000;
  overflow: hidden;
`;
const IFrameContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export { IFrame, IFrameContainer };
