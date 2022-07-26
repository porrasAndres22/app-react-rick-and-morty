import styled from 'styled-components';

export const ItemSelection = styled.div`

    display: flex;
    cursor: pointer;
    width: 240px;
    height: 60px;
    margin: 0 10px 0 10px; 
    background-color: #0F1228;
    color: #F1F3F4;
    font-size: 20px;
    font-family: 'Pangolin', sans-serif;
    border-radius: 14px 14px 0px 0px;
    justify-content: center;
    align-items: center;
    transition: all .1s ease-in-out;
    
    &:hover{
        border-radius: 14px;
        width: 230px;
        height: 50px;
        margin: 0 15px 0 15px; 
    }

    @media (max-width: 400px) {
        width: 110px;
        height: 50px;
        font-size: 18px;
    }

`;

export const ItemSelectionMin = styled.div`

    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    poasition: relative;
    width: 60px;
    height: 60px;
    background-color: #0F1228;
    color: #F1F3F4;
    font-size: 20px;
    font-family: 'Pangolin', sans-serif;
    border-radius: 14px 14px 0px 0px;
    align-items: center;
    justify-content: center;
    transition: all .1s ease-in-out;
    overflow: hidden;
    
    &:hover{
        border-radius: 14px;
        width: 200px;
        height: 240px;
        border-radius: 14px;
        z-index: 9;
    }

    & > svg {
        width: 100%;
        margin: 20px 0;
    }

    & > div {
        display: flex;
        width: 100%;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
        border-radius: 14px;
    }

    & > div:hover {
        background-color: #252A49;
    }
    
    & > div > svg{
        margin: 0 20px;
    }

    @media (max-width: 400px) {
        width: 60px;
        height: 50px;
        font-size: 18px;
    }
`;

