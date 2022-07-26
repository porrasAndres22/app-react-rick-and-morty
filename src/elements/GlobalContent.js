import styled from 'styled-components';

const GlobalContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const Header = styled.div`
    position: absolute; 
    width: 100%;
    height: 200px;
    background-color: #161A35;
    transition: all .5s ease;

    ${({ skin }) => skin && `
        height: 160px;
    `}

    @media (max-width: 400px) {
        ${({ skin }) => skin && `
            height: 200px;
        `}
    }

`;

const ContentSection = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 40px;
    align-items: flex-Start;
    justify-content: center;
`;

const ContentWork = styled.div`
    position: absolute; 
    width: 100%;
    top: 160px;
    height: calc(100% - 160px);
    background-color: #0F1228;
    border-radius: 40px 40px 0 0;
    overflow: hidden;

    ${({ skin }) => skin && `
        top: 120px;
        height: calc(100% - 120px);
    `}

    @media (max-width: 400px) {
        top: 150px;
        height: calc(100% - 150px);
        border-radius: 20px 20px 0 0;

        ${({ skin }) => skin && `
            height: calc(100% - 0);
        `}
    }
`;




const ContenApp = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;




export {
    GlobalContent, 
    Header, 
    ContentWork, 
    ContentSection,
    ContenApp
};