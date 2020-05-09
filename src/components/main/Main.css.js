import styled from 'styled-components'

export const MainContainer = styled.main`
    max-width:1200px;
    margin: 0 auto;
    min-height: 20vh;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;

    footer{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Card = styled.article`
    width: 250px;
    height: 350px;
    margin: 50px 20px;

    header{
        display:flex;
        justify-content: space-between;
        align-items:center;
    }

    h2{
        margin: 2px 0;
    }

    img{
        width:100%;
        height: 350px;
    }

    p{
        margin: 0;
    }

    .bold{
        font-weight: bold;
    }

`;

export const Button = styled.button`
    font-size:24px;
    padding: 20px 50px;
    border-radius: 5px;
    cursor: pointer;
    display:block;
    margin: 70px auto;
    background-color: goldenrod;
    color: white;
    border: 4px solid goldenrod;

    transition: 0.2s;

    &:hover{
        background-color: white;
        color: goldenrod;
    }
`;


