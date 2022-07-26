import React, {useState} from 'react';
import {ContentGlobalLogin, 
        ContentDataLogin, 
        CapsuleDataLogin, 
        ContentDataName, 
        ContentAllDataInput, 
        CapsuleDataInput, 
        DataInput,
        ShadowContentLogin,
        RedirectLogin,
        ContentButtonAccion,
        ButtonAccion,
        ContentErrorMessage } from './elements/ViewLogin'
import WallBack from './pictures/wall1.jpg';

const LoingApp = () => {

    const [statusLog, setStatusLog] = useState(false);
    const [messageError, setMessageError] = useState("");

    const expresiones = {
        testemail: /^([a-zA-Z0-9_.+-]{10,20})+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        testpassword: /(?=.*\d+?.{2})(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,30}/,};
    

    const fetchCreateUser = async(objetSend) => {

        if (objetSend !== "") {
            const newUser = objetSend;

            if(expresiones.testemail.test(objetSend.name)){
                if(expresiones.testpassword.test(objetSend.pass)){
                    const fetchResult = await fetch(`https://aplicationapirest.xyz/login`, {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                    headers: { 'Content-Type': 'application/json' }
                    });
                    const fetchJson = await fetchResult.json();
                    if (fetchJson === objetSend.name) {
                        setStatusLog(true);
                    }else if(fetchJson !== objetSend.name){
                        setMessageError(`User Exist`);
                    }
                }else{
                    setMessageError(`Use Another Pass`);
                }
            }else{
                setMessageError(`Use Another email`);
            }
        }
    }
    
    const fetchFoundUser = async(inputDomeName, inputDomePass) => {

        const userFound = {
            "name": inputDomeName,
            "pass": inputDomePass
        }
    
        if ((inputDomeName !== "") && (inputDomePass !== "")) {
            const fetchResult = await fetch(`https://aplicationapirest.xyz/login/compare`,{
                method: 'POST',
                body: JSON.stringify(userFound),
                headers: { 'Content-Type': 'application/json' }
            });
            const fetchJson = await fetchResult.json();
            if (fetchJson.hash === "true") {
                sessionStorage.setItem("session", inputDomeName);
                window.location.href = "/";
            }else if (fetchJson.hash === "false") {
                setMessageError(`User not exist`);
            }
        }
    }

    if(messageError !== ""){
        setTimeout(() => {
            setMessageError("");
        }, 4000);
    }
    
    return (
        <ContentGlobalLogin>
            <img src={WallBack}></img>
            <ShadowContentLogin></ShadowContentLogin>
            <ContentDataLogin>
                <CapsuleDataLogin>
                    <ContentDataName>{statusLog === false ? "Create Account" : "Log In"}</ContentDataName>
                    <ContentAllDataInput>
                        <CapsuleDataInput>
                            <DataInput id="inputName" placeholder="email" type="text"></DataInput>
                        </CapsuleDataInput>
                        <CapsuleDataInput>
                            <DataInput id="inputPass" placeholder="password" type="password"></DataInput>
                        </CapsuleDataInput>
                        <RedirectLogin>
                            <div>{statusLog === false ? "Already to Start?" : "You need Create Account"}</div>
                            <div onClick={statusLog === false ? () => {setStatusLog(true)} : () => {setStatusLog(false)}}>{statusLog === false ? "Log In." : "Create."}</div>
                        </RedirectLogin>
                        <ContentButtonAccion>
                            <ButtonAccion onClick={
                                    () => {
                                        if (statusLog === false) {
                                            const inputDomeName = document.getElementById('inputName'); 
                                            const inputDomePass = document.getElementById('inputPass'); 

                                            if((inputDomeName.value !== "") && (inputDomePass.value !== "")){
                                                const objetSend = {
                                                    "name": inputDomeName.value,
                                                    "pass": inputDomePass.value
                                                }
                                                
                                                fetchCreateUser(objetSend);
                                            }else{
                                                setMessageError(`fields cannot be empty`);
                                            }
                                            
                                        }else if(statusLog === true){
                                            const inputDomeName = document.getElementById('inputName'); 
                                            const inputDomePass = document.getElementById('inputPass'); 

                                            if((inputDomeName.value !== "") && (inputDomePass.value !== "")){

                                                fetchFoundUser((inputDomeName.value), (inputDomePass.value));
                                            }else{
                                                setMessageError(`fields cannot be empty`);
                                            }

                                        }
                                    }
                            }>{statusLog === false ? "Create" : "Sing In"}</ButtonAccion>
                        </ContentButtonAccion>
                    </ContentAllDataInput>
                    {messageError === "" ? 
                        <ContentErrorMessage skin=""></ContentErrorMessage>  
                    : messageError !== "" ?
                        <ContentErrorMessage skin="Active">{messageError}</ContentErrorMessage>  
                    :
                    <></>    
                    }
                </CapsuleDataLogin>              
            </ContentDataLogin>
        </ContentGlobalLogin>
    )

}

export default LoingApp;