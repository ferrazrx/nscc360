import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    0%{ 
        transform: scale(0,0)
    }
    60%{
        transform: scale(1.1,1.1)
    }
    80%{
        transform: scale(0.9,0.9)
    }
    100%{
        transform: scale(1,1)
    }
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  font-weight: 800;
  font-family: "Oswald", sans-serif;

  .dropdown {
    cursor: pointer;
    flex: 1 0 auto;
    text-align: center;
    padding: 0 10px;
  }
  .dropdown-menu {
    width: 100%;
    text-align: center;
  }
  .dropdown-item:hover {
    color: #fff;
  }
`;

const FloorNav = styled.nav`
  color: #fff;
`;

const TourContainer = styled.nav`
  position: relative;
`;

const MapContainer = styled.div`
  box-sizing: content-box;
  width: 50%;
  position: absolute;
  z-index: 1;
  padding: 1%;
  bottom: 40px;
  right: 0;
  transform: translateX(100vw);
  transition: all 1s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  margin-right: 5%;
  ${({ opened }) => opened && `transform: translateX(0vw); opacity: 1;`}
`;

const MapButton = styled.div`
  color: #fff;
  position: absolute;
  z-index: 1;
  font-size: 3em;
  bottom: 40px;
  right: 90px;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 2;
  transform: scale(${({ size }) => (size ? "0.6,0.6" : "1,1")});

  &:hover {
    transform: scale(1.2, 1.2);
  }
  i {
    animation: ${fadein} 0.6s ease-out;
  }
`;

const FloorButton = styled.div`
  color: #fff;
  position: absolute;
  z-index: 1;
  font-size: 3em;
  bottom: 40px;
  left: 40px;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 2;
  transform: scale(${({ size }) => (size ? "0.6,0.6" : "1,1")});

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

export {
  DropdownContainer,
  FloorNav,
  TourContainer,
  MapContainer,
  MapButton,
  FloorButton
};
