import styled from 'styled-components';


export const HeaderContainer = styled.header`
    max-width: 1200px;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
`;


export const Input = styled.input`
    max-width: 400px;
    min-width: 200px;
    padding: 10px 20px;
    border:none;
    border-bottom: 2px solid maroon;
    background-color: transparent;
    transition: 0.2s;
    position: relative;

    font-size:20px;


    &:focus{
        border-bottom: 2px solid goldenrod;
    }

`;

export const Label = styled.label`
    position: absolute;
    left: 20px;
    font-size:20px;
    top: ${props =>props.active ? "150%": "50%"};
    transform: translateY(-50%);
    transition: 0.2s;
`;