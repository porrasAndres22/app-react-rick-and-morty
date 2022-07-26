import styled from 'styled-components';

const ContentGlobalLogin = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;   
        
        @media (max-width: 400px) {
            width: auto;
            left: -100%;
    
        }
    }
    
    @media (max-width: 400px) {
        align-items: center;
        justify-content: center;

    }

`;

const ShadowContentLogin = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;    
    background: rgb(15,18,40);
    background: linear-gradient(90deg, rgba(15,18,40,1) 51%, rgba(10,12,27,0.4206057422969187) 100%);
    opacity: 0.9;
`;

const ContentDataLogin = styled.div`
    display: flex;
    position: relative;
    width: 500px;
    height: 100%;
    align-items: center;
    justify-content: center;

    @media (max-width: 400px) {
        width: calc(100% - 10px);
    }
`;

const CapsuleDataLogin = styled.div`
    position: relative;
    width: 400px;
    height: 500px;
    background-color: #0f1228;
    border-radius: 20px;
`;


const ContentDataName = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100px;
    color: aquamarine;
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    align-items: center;
    justify-content: center;
`;

const ContentAllDataInput = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 100px);
    top: 100px;
    padding: 0 20px;
    background-color: #282D4F;
    border-radius: 20px;
    overflow: hidden;
`;


const CapsuleDataInput = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 40px;
    background-color: #171B35;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
`;

const DataInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background: none;
    color: #A592F2;
    font-size: 20px;
    font-family: 'Rubik', sans-serif; 
    outline: none;
    border: none;
`;

const RedirectLogin = styled.div`
    display: flex;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    & > div:nth-child(1){
        margin-right: 6px;
        color: #CACEE6;
    } 

    & > div:nth-child(2){
        color: #41C9CA;
    } 

    & > div:nth-child(2): hover{
        color: aquamarine;
    } 
`;

const ContentButtonAccion = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
`;

const ButtonAccion = styled.div`
    display: flex;
    cursor: pointer;
    width: 180px;
    height: 60px;
    background-color: #49507E;
    color: #CACEE6;
    font-size: 24px;
    font-family: 'Pangolin', cursive;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.1s linear;

    &:hover {
        width: 175px;
        height: 55px;
    }
`;

const ContentErrorMessage = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0;
    bottom: -20px;
    background-color: #0F1228;
    color: #D0D4EB;
    font-size: 20px;
    font-family: 'Pangolin', cursive;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    opacity: 0;
    transition: all .2s ease;

    ${({ skin }) => skin && `
        opacity: 1;
        transition: all .2s ease;
    `}
`;


export {ContentGlobalLogin, ContentDataLogin, CapsuleDataLogin, ContentDataName, ContentAllDataInput, CapsuleDataInput, DataInput, ShadowContentLogin, RedirectLogin, ContentButtonAccion, ButtonAccion, ContentErrorMessage }

