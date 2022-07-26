import styled from 'styled-components';


export const ContentGlobalEpisodes = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0F1228;
`;

export const ContentArrowRegrese = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
`;

export const ContentCreateList = styled.div`
    display: flex;
    position: relative;
    width: 500px;
    height: 60px;
    align-items: center;
    justify-content: center;

    & > input {
        width: 100%;
        padding: 14px 20px;
        background-color: #161A35;
        color: #5C6180;
        font-size: 24px;
        font-family: 'Rubik', sans-serif; 
        border: none;
        border-radius: 20px;
        outline: none;   
    }

    & > div {
        display: flex;
        cursor: pointer;
        position: absolute;
        width: 20px;
        height: 20px;
        right: 0; 
        background-color: #42CECE;
        color: #2D4D68;
        font-size: 40px;
        align-items: center;
        justify-content: center;
        transition: all .1s linear; 
    }

    & > div:hover {
        font-size: 38px;
    }


    @media (max-width: 400px) {
        position: absolute;
        width: 200px;
        height: 60px;
        right: 20px;

        & > input {
            width: 100%;
            padding: 14px 20px;
            background-color: #161A35;
            color: #5C6180;
            font-size: 18px;
            font-family: 'Rubik', sans-serif; 
            border: none;
            border-radius: 20px;
            outline: none;   
        }


    }
`;

export const ContentButtonRegrese = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 40px;
    color: #262B4D;
    font-size: 50px;
    align-items: center;
    justify-content: center;

    & > a {
        color: #262B4D;
        z-index: 9;
    }

    &:hover {
        font-size: 46px;
    }
`;


export const ContentGlobalList = styled.div`
    position: relative;
    width: 100%;
    height: calc(100% - 120px);
`;


export const ContentAllList = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0px;
    }
`;


export const ContentList = styled.div`
    position: relative;
    width: 100%;
    width: 400px;
    margin-top: 60px;
`;


export const CapsuleList = styled.div`
    position: relative;
    width: 100%;
    min-height: 140px;
    background-color: #282D4F;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 28px;
`;

export const ContentHeaderEpisodes = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;

    & > div:nth-child(1){
        display: flex;
        position: absolute;
        width: calc(100% - 60px);
        height: 65px;
        padding-left: 20px;
        background-color: #161A35;
        color: #5C6180;
        font-size: 24px;
        font-family: 'Pangolin', cursive;
        align-items: center;
        justify-content: flex-start;
        border-radius: 28px;
    }

    & > div:nth-child(2){
        cursor: pointer;
        display: flex;
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #F2F1F7;
        color: #A592F2;
        font-size: 40px;
        right: 36px;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: all .1s linear; 

        ${({ skin }) => skin && `
            font-size: 30px;
            color: #5C6180;
            background: none;
        `}
    }

    & > div:nth-child(2):hover {
        font-size: 38px;
    }
`;


export const ContentAllEpisodes = styled.div`
    position: relative;
    width: 100%;
`;


export const CapsuleEpisodes = styled.div`
    display: flex;
    cursor: pointer;
    position: relative;
    width: 100%;
    font-size: 22px;
    font-family: 'Pangolin', cursive;
    color: #D0D4EB;
    align-items: center;
    justify-content: flex-start;
    transition: all .2s linear; 


    & > img {
        width: 60px;
        margin: 10px 20px 10px 40px;
        border-radiu: 4px;
    }
    
    & > div:nth-child(3) {
        display: flex;
        position: absolute;
        width: 60px;
        height: 100%;
        right: 0; 
        background-color: #1C1F37;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0s linear; 

        @media (max-width: 400px) {
            background-color: #282D4F;
            opacity: 1;
        }
    }
    
    &:hover > div:nth-child(3) {
        opacity: 1;
        transition: all .2s linear; 
    }

    &:hover {
        background-color: rgb(0, 0, 0, 0.3);
    }

`;
