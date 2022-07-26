import styled from 'styled-components';


const GlobalContentCardCharacter = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: calc(100% - 200px);
    padding-bottom: 80px;
    justify-content: center;
    gap: 40px;
    overflow: auto;

    @media (max-width: 400px) {
        height: calc(100% - 160px);
        padding-bottom: 40px;
        
        ${({ skin }) => skin && `
            height: calc(100% - 0px);
            padding-bottom: 0px;
        `}
    }

    ${({ skin }) => skin && `
        height: 100%;
        padding-bottom: 0;
    `}

    &::-webkit-scrollbar {
        width: 15px;
    }
    
`;  

const BoxCard = styled.div`
    width: 300px;
    height: 380px;
    margin-bottom: 20px;
    background-color: #282D4F;
    border-radius: 20px;
`;
    
    
const ContentImageCard = styled.div`
    width: 280px;
    height: 220px;
    margin: 10px 0 0 10px;
    border-radius: 20px;
    overflow: hidden;
`;

const ImageCard = styled.img`
    width: 100%;
`;

const ContentSlideDescript = styled.div`
    display: flex;
    width: 280px;
    height: 50px;
    margin: 10px 0 0 10px;
    color: #5E6280; 
    font-family: 'Pangolin', cursive;
    background-color: #161A35;
    align-items: center;
    gap: 10px; 
    border-radius: 20px;
    overflow: hidden;
`;

const CapsuleStatus = styled.div`
    display: flex;
    width: 100px;
    height: 50px;
    color: #C9CDE5;
    background-color: #4A5079;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

const CapsuleInfo = styled.div`
    display: flex;
    width: 240px;
    height: 20px;
    margin-top: 10px;
    gap: 5px;
    overflow: hidden;

    & > div{
        color: #5E6280; 
    }
`;

const ContentExtraInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 280px;
    height: 100px;
    margin: 16px 0 0 10px;
    padding-bottom: 10px;
    color: #C9CDE5; 
    font-family: 'Pangolin', cursive;
    background-color: #161A35;
    align-items: flex-start;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    transition: all .2s ease 0s;

    &:hover{
        height: 120px;
        transition: all .2s ease .5s;
    }
`;

const ButtonMore = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 14px;
    right: 14px;
    color: #42CFCF;
    font-size: 30px; 
    background-color: #F4F7FC;
    align-items: center;
    justify-content: center;
    transition: all .1s linear;

    &:hover {
        font-size: 35px; 
    }
`;

export {GlobalContentCardCharacter, BoxCard, ContentImageCard, ImageCard, ContentSlideDescript, CapsuleStatus, ContentExtraInfo, CapsuleInfo, ButtonMore}