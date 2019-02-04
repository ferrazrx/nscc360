import styled from "styled-components";

const Logo = styled.img`
  width: 120px;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
`;

export { Logo, Nav, Container };
