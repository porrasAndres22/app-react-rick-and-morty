import styled from 'styled-components';


const BrandDesployCharacter = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    color: #C9CDE5; 
    font-family: 'Pangolin', cursive;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    gap: 40px;
    transition: all .2s ease 0s;

    @media (max-width: 400px) {
        height: calc(100% - 40px);
        margin-top: 40px;
        overflow: auto;

    }
`;

const CapsulePictureFocusCharacter = styled.div`
    position: relative;
    width: 560px;
    height: 436px;
    border-radius: 20px;
    overflow: hidden;
    
    @media (max-width: 400px) {
        display: flex;
        justify-content: center;
        height: 600px;
    }

`;

const PictureFocusCharacter = styled.img`
    position: absolute;
    width: 270px;
    top: 135px;
    left: 35px;
    border-radius: 20px;

    @media (max-width: 400px) {
        left: initial;
        z-index: 9;
    }
`;

const StainFrontTop = styled.div`
    display: flex;
    position: absolute;
    width: calc(100% - 100px);
    height: 180px;
    top: 0;
    right: 0;
    background-color: #282E50;
    justify-content: center;
    border-radius: 30px 0 30px 0;

    @media (max-width: 400px) {
        width: calc(100% - 60px);
        height: 180px;
        border-radius: 14px 0 14px 0;
    }
`;

const StainFrontBackground = styled.div`
    position: absolute;
    width: calc(100% - 220px);
    height: 335px;
    top: 100px;
    left: 0;
    background-color: #282E50;
    border-radius: 30px 0 30px 30px;

    @media (max-width: 400px) {
        width: calc(100% - 0px);
        height: 335px;
        top: 60px;
        border-radius: 14px 0 14px 14px;
    }
`;

const StainFrontBottom = styled.div`
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    background-color: #0F1227;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    @media (max-width: 400px) {
        width: 60px;
        height: 60px;
        border-radius: 14px;
    }
`;

const StainFrontList = styled.div`
    display: flex;
    position: absolute;
    width: calc(100% - 340px);
    height: 255px;
    bottom: 0;
    right: 0;
    background-color: #0F1227;
    align-items: flex-end;
    justify-content: flex-end;
    border-radius: 30px;

    @media (max-width: 400px) {
        width: calc(100% - 0px);
        height: 220px;
        padding-bottom: 20px;
        background-color: #0F1227;
        align-items: flex-end;
        justify-content: center;
        border-radius: 14px;
    }
`;

const StainFrontChain = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 70px;
    left: 70px;
    background-color: #282E50;  

    @media (max-width: 400px) {
        position: absolute;
        width: 14px;
        height: 14px;
        top: 48px;
        left: 48px;
        background-color: #282E50;  
        
    }
`;

const StainFrontChainList = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 180px;
    right: 190px;
    background-color: #282E50;
`;

const BottomStatus = styled.div`
    display: flex;
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: #42D0D0;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: all .2s ease;

    &:hover {
        font-size: 30px;
    }
`;

const BottomList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 60px);
    height: calc(100% - 65px);
    padding: 20px;
    background-color: #282E50;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    @media (max-width: 400px) {
        height: calc(100% - 100px);
        border-radius: 14px;   
    }

    & > div {
        width: 100%; 
    }
`;

const BannerNameFocusCharacter = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: 100px;
    top: 20px;
    color: #D0D4EB;
    
    & > a {
        text-decoration: none;
        color: #A390EE;
    }

    & > a:hover {
        text-decoration: none;
        color: #6C609E;
    }

    @media (max-width: 400px) {
        font-size: 16px; 
    }
`;

const NameFocusCharacter = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    font-size: 40px;
    font-family: 'Pangolin', sans-serif;
    overflow: hidden;

    @media (max-width: 400px) {
        margin-bottom: 8px;
        font-size: 24px; 
    }
`;


const ContentWorld = styled.div`
    display: flex;
    position: absolute;
    width: 100px;
    height: 100%;
    top: 0;
    right: 0;
    align-items: flex-start;
    justify-content: flex-end;

    & > img {
        width: 65px;

        @media (max-width: 400px) {
           width: 45px;
        }
    }
`;

const ContentInfoNextEpisode = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    width: 35px;
    height: 35px;
    top: calc(50% - 20px);
    right: -20px;
    background-color: #A692F2;
    color: #161A35;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    opacity: 0;
    transition: all .5s ease;
`;

const ContentInfoPictureEpisode = styled.div`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 240px;
    border-radius: 20px;
    overflow: hidden;

    & > img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    
    & > div:first-of-type  {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.2);
        transition: all .5s esae;
    }

    &:hover > div:first-of-type {
        background-color: rgb(0, 0, 0, 0.5);
    }

    & > div:last-of-type {
        position: absolute;
        width: 100%;
        height: 180px;
        left: 0;
        bottom: 0;
        background: rgb(40,46,80);
        background: linear-gradient(0deg, rgba(40,46,80,1) 25%, rgba(0,0,0,0) 100%);
    }
`;

const CapsulePicturesEpisodes = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 380px;
    height: 435px;
    background-color: #282E50;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: 20px;

    &:hover > ${ContentInfoNextEpisode} {
        opacity: 1;
    }
`;

const ContentInfoDataEpisode = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: calc(100% - 20px);
    height: 205px;
    margin-top: -60px;
    padding: 0 10px;
    overflow: hidden;
`;

const ContentInfoDataNameEpisode = styled.div`
    position: relative;
    max-width: 200px;
    height: 33px;
    margin-top: 10px;
    padding: 10px;
    background-color: #2D4D68;
    color: #42CFCF;
    font-size: 30px;
    font-family: 'Pangolin', sans-serif;
    border-radius: 20px;
    overflow: hidden;
`;

const ContentInfoDataRate = styled.div`
    display: float;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    padding: 8px;
    background-color: #081C22;
    font-size: 20px;
    font-family: 'Prompt', sans-serif;
    align-items: center;
    justify-content: center;
    border: solid 4px #42CFCF;
    border-radius: 100%;

    & > div {
        max-width: 28px;
        overflow: hidden;
    }
`;

const ContentInfoDataResumenEpisode = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    overflow: hidden;
`;


export {BrandDesployCharacter, 
        CapsulePictureFocusCharacter, 
        StainFrontTop,
        StainFrontBackground,
        StainFrontBottom,
        StainFrontList,
        StainFrontChain,
        StainFrontChainList,
        BottomStatus,
        BottomList,
        PictureFocusCharacter, 
        BannerNameFocusCharacter,
        NameFocusCharacter,
        ContentWorld,
        CapsulePicturesEpisodes,
        ContentInfoPictureEpisode,
        ContentInfoDataEpisode,
        ContentInfoDataNameEpisode,
        ContentInfoDataRate,
        ContentInfoDataResumenEpisode,
        ContentInfoNextEpisode
       };