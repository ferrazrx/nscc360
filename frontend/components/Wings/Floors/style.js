import styled from 'styled-components';

const MapContainer = styled.div`
    circle{
        cursor:pointer;
        transition: all 0.5s;
    }
    circle:hover{
        fill: #F34;
        r: 8;
    }
`;

export { MapContainer };