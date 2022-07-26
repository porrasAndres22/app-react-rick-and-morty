import styled from 'styled-components';

export const ContentLogo = styled.div`
    cursor: pointer;
    position: relative;
    width: 260px;
    height: 70px;
    margin: 40px 0 0 60px;
    z-index: 9;

    @media (max-width: 400px) {
        margin: 20px 0 0 60px;
    }
`;

export const TipoLogo = styled.img`
    cursor: pointer;
    height: 70px;
`;

export const FrontLogo = styled.div`
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;


