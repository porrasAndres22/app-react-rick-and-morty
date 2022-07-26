import styled from 'styled-components';

const CapsuleCardsEpisodes = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 500px;
    height: 240px;
    background-color: #282E50;
    border-radius: 20px; 
    overflow: auto;
`;

const ContentPictureEpisodes = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;


const ContentDataEpisode = styled.div`
    display: flex;
    position: relative;
    width: calc(100% - 240px);
    height: calc(100% - 40px);
    padding: 20px;
    background-color: #161A34;
    color: #A08EEC; 
    font-family: 'Pangolin', cursive;
    border-radius: 20px;
    overflow: auto;

    
    & > div:first-of-type {
        height: 50px;
        padding: 10px;
        background-color: #41416F;
        font-size: 36px;
        font-family: 'Pangolin', cursive;
        border-radius: 10px; 
    }
    
    & > div:nth-last-of-type(2) {
        position: absolute;
        width: calc(100% - 40px);
        max-height: calc(100% - 180px);
        top: 100px;
        left: 20pz; 
        color: #D0D4EB;
        overflow: hidden;
    }
    
    & > div:last-of-type {
        position: absolute; 
        height: 30px;
        left: 20px;
        bottom: 0;
        font-size: 18px;
    }

    @media (max-width: 400px) {
        overflow: hidden;

        
        & > div:first-of-type {
            height: 60px;
            font-size: 28px;
            border-radius: 10px; 
            text-align: center;
    
        }
        
        & > div:nth-last-of-type(2) {
            top: 110px;
        }
        
        & > div:last-of-type(1) {
            bottom: 10px;
        }
    }

`;


const PictureEpisodes = styled.img`
    display: flex;
    cursor: pointer;
    height: 90%;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 
    overflow: auto;
    transition: all .1s linear;

    &:hover {
        height: 88%;
    }
`;


const ContentShowEpisodes = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;


const ContentRowLeft = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center; 
`;

const ContentAllEpisodes = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: calc(100% - 140px);
    padding-bottom: 140px;
    justify-content: center; 
    gap: 40px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0px;
    }

`;


const CapsuleEpisodes = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative; 
    height: 434px;
    color: #D0D4EB;
    font-family: 'Pangolin', cursive;
    border-radius: 20px;
    overflow: hidden;
`;

const ButtonCharacter = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    height: 30px;
    left: 40px;
    right: 40px;
    bottom: 0;
    padding: 4px;
    color: #A08EEC;
    background-color: #41416F;
    font-size: 20px;
    font-family: 'Pangolin', cursive;
    align-items: center;
    justify-content: center; 
    border: solid 2px ;
    border-radius: 10px; 
`;



export { CapsuleCardsEpisodes, ContentPictureEpisodes, ContentDataEpisode, PictureEpisodes, ContentShowEpisodes, CapsuleEpisodes, ContentRowLeft, ContentAllEpisodes, ButtonCharacter };