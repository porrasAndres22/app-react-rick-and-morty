import styled from 'styled-components';

export const ContentPresentation = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    @media (max-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;

    }
`;

export const ContentWallBack = styled.div`
    position: absolute;
    width: calc(100% - 200px);
    height: 100%;
    margin: 0 0 0 200px; 
    border-radius: 40px 40px 0 0;
    opacity: 1;

    & > img {
        position: absolute; 
        width: 100%;
        top: 0;
        left: 0; 
    }

    & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.4);;
    }

`;

export const ContentMembre = styled.div`
    display: flex;
    position: relative;
    width: 500px;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    overflow: hidden;

    & > img {
        height: 100%;
    }

    @media (max-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;

    }
`;


export const BannerDescript = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: 260px;
    left: 0;
    bottom: 20px;
    padding: 40px 20px 20px 20px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.8911939775910365) 66%, rgba(10,12,27,0) 100%);
    color: #7FFFD4;
    font-size: 30px;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;
`; 