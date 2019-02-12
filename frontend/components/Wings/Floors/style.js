import styled from "styled-components";

const MapContainer = styled.div`
  circle {
    cursor: pointer;
    transition: all 0.5s;
  }
  circle:hover {
    fill: #f34;
    r: 8;
  }
  .current {
    fill: #380;
    r: 8;
  }
`;

export { MapContainer };
