import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faTableList, faToggleOff, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import LoingApp from './LoginApp.js';
import EpisodesApp from './EpisodesApp.js';
import {GlobalContent, Header, ContentWork, ContentSection} from './elements/GlobalContent.js';
import Pesentation from './components/Presentation.js';
import ShowCharacters from './components/ShowCharacters.js';
import ShowEpisodes from './components/ShowEpisodes.js';

import {ItemSelection, ItemSelectionMin} from './elements/ItemSelection.js'
import {ContentLogo, TipoLogo, FrontLogo} from './elements/TipoLogo.js';
import Logo from './pictures/tipologo.png';


const GlobalApp = () => {

    const [showSelection, cambiarEstado] = useState("home");
    const [showView, cambiarVista] = useState("home");

    useEffect(() => {
        const session = sessionStorage.getItem("session");
        if(session === null){
            cambiarVista("login");
        }
    },[]);


    const closeSession = () => {
        sessionStorage.clear()
        window.location.href = "/";
    }

    const createList = () => {
        cambiarVista("episodes");
    }

    return (

        showView === "home" ?
            <GlobalContent>
                <Header skin={showSelection === "home" ? "" : showSelection === "characters" ? "Active" : showSelection === "episodes" ? "Active" : ""}>
                    <ContentLogo>
                        <TipoLogo src={Logo}></TipoLogo>
                        <FrontLogo onClick={() => {cambiarEstado("home")}}></FrontLogo>
                    </ContentLogo>
                    <ContentSection>
                        <ItemSelection onClick={() => {cambiarEstado("characters")}}>Personajes</ItemSelection>
                        <ItemSelectionMin>
                            <FontAwesomeIcon icon={faUserLarge} />
                            <div onClick={() => {cambiarEstado("home")}}>
                                <FontAwesomeIcon icon={faHouseChimneyWindow} />
                                <div>Home</div>
                            </div>
                            <div onClick={createList}>
                                <FontAwesomeIcon icon={faTableList} />
                                <div>Create LIst</div>
                            </div>
                            <div onClick={closeSession}>
                                <FontAwesomeIcon icon={faToggleOff} />
                                <div>Long Out</div>
                            </div>
                        </ItemSelectionMin>
                        <ItemSelection onClick={() => {cambiarEstado("episodes")}}>Episodios</ItemSelection>
                    </ContentSection>


                </Header>
                <ContentWork skin={showSelection === "home" ? "" : showSelection === "characters" ? "Active" : showSelection === "episodes" ? "Active" : ""}>

                    { 
                    showSelection === "home" ? 
                        <Pesentation/>
                    :
                    showSelection === "characters" ?
                        <ShowCharacters/>
                    :
                    showSelection === "episodes" ?
                        <ShowEpisodes/>
                    :  
                    <></>
                    }

                </ContentWork>
            </GlobalContent>
        : showView === "login" ? 
            <LoingApp/>
        :showView === "episodes" ? 
            <EpisodesApp/>
        : 
        <></>
    )

}

export default GlobalApp;