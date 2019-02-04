import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9,0.9)
     
    }
    to{
        opacity: 1;
        transform: scale(1,1)
    }
    
`;

const WingContainer = styled.div`
  svg {
    animation: ${fadein} 0.5s ease-in;
  }
`;

export { WingContainer };
