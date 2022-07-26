import styled from 'styled-components';


const ContenInputSearch = styled.div`
    display: flex; 
    position: relative;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${({ skin }) => skin && `
        height: 0px;
    `}
`;

const InputSearch = styled.input`
    position: absolute;
    width: 400px;
    height: 20px;
    padding: 10px;
    background-color: #F1F3F4;
    color: #40B5CB;
    font-size: 20px;
    font-family: 'Pangolin', sans-serif;
    border: none;
    border-radius: 10px;
    outline: none;

    @media (max-width: 400px) {
        width: 200px;
        height: 20px;
        right: 20px;
    }
`;


const ContentViewAll = styled.div`
    display: flex;
    position: absolute;
    width: 120px;
    height: 120px;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
        left: 0px;
        right: inherit;
    }
`;


const ButtonPlus = styled.div`
    display: flex;
    cursor: pointer; 
    width: 20px;
    height: 20px;
    padding: 10px;
    background-color: #F1F3F4;
    color: #40B5CB;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all .2s ease;
    
    &:hover {
        font-size: 26px;
    }
`;


const ContentNumPag = styled.div`
    display: flez;
    position: absolute;
    width: 400px;
    padding: 5px;
    color: #fff;
    font-size: 18px;
    font-family: 'Pangolin', sans-serif;
    gap: 14px;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
        width: 206px;
        right: 34px;
        overflow: hidden;
    }

`;

const NumPage = styled.div`
    display: flex;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: #41416F;
    color: #A08EEC;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all .2s ease;

    &::selection{
        background: transparent;
    }

    &:hover{
        width: 28px;
        height: 28px;
        margin: 0 1px 0 1px;
    } 
    
    ${({ skin }) => skin && `
        background-color: #A692F2;
        color: #fff;
    `}
`;


const NumArrow = styled.div`
    display: flex;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #2D4D68;
    color: #41C9CA;
    font-size: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

`;



export {ContenInputSearch, InputSearch, ContentViewAll, ButtonPlus, ContentNumPag, NumPage, NumArrow};