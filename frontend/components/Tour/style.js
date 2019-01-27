import styled from 'styled-components';

const DropdownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-around;
    font-size: 2em;
    font-weight: 800;
    font-family: 'Oswald', sans-serif;

    .dropdown{
        cursor: pointer;
        flex: 1;
        text-align: center;
    }
    .dropdown:nth-of-type(2){
        border-left: 1px solid #DDD;
        border-right: 1px solid #DDD;
    }
    .dropdown:nth-of-type(3){
        border-right: 1px solid #DDD;
    }
    .dropdown-menu{
        width: 100%;
        text-align: center;
    }
    .dropdown-item:hover{
        color: #FFF;
    }
`;

export { DropdownContainer }