import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleChevronLeft, faCircleChevronRight, faCircleArrowRight, faBorderAll, faMattressPillow } from '@fortawesome/free-solid-svg-icons';
import { ContenApp } from "../elements/GlobalContent.js";
import {GlobalContentCardCharacter} from '../elements/CharacterCards.js';
import {BoxCard, ContentImageCard, ImageCard, ContentSlideDescript, CapsuleStatus, ContentExtraInfo, CapsuleInfo, ButtonMore} from '../elements/CharacterCards.js';
import { BrandDesployCharacter, 
         CapsulePictureFocusCharacter, 
         PictureFocusCharacter, 
         BannerNameFocusCharacter, 
         StainFrontTop, 
         StainFrontBackground,
         StainFrontList, 
         StainFrontBottom, 
         StainFrontChain, 
         StainFrontChainList,
         BottomStatus,
         BottomList,
         NameFocusCharacter,
         ContentWorld,
         CapsulePicturesEpisodes,
         ContentInfoPictureEpisode, 
         ContentInfoDataEpisode,
         ContentInfoDataNameEpisode,
         ContentInfoDataRate,
         ContentInfoDataResumenEpisode,
         ContentInfoNextEpisode } from '../elements/DesplyCharacter.js';
import { ContenInputSearch, InputSearch, ContentViewAll, ButtonPlus, ContentNumPag, NumPage, NumArrow } from "../elements/InputSearch.js";
import earthPic from '../pictures/earth.png';
import PlanetPic from '../pictures/planet.png';


const ShowCharacters = () => {

    const [listCharacters, setCharacters] = useState("");
    const [listEpisodes, setEpisodes] = useState("");
    const [desployMoreOfCharacters, setMoreOfCharacters] = useState("");
    const [desplyMoreEpisodes, setDesployMoreEpisodes] = useState(0);
    const [viewMorePages, setMorePages] = useState(false);
    const [actualNumPage, setActualNumbPage] = useState(0);

    useEffect(() => {
        fetchCharacters();
        fetchEpisodes();
    },[]);

    let listCharactersEpisodes = [];
    let listNumbCharacterEpisode = [];
    let numPagination = [1, 2, 3, 4, 5, 6, 7];

    const fetchCharacters = async (e) => {

        let foundCharacters = "";
        let decodeVal = "";
        let thenListCharacters = [];
        let nextNumPage = "";

        if (e === undefined) {
            decodeVal = Math.floor((Math.random() * (42-1))+1);
            foundCharacters = `/?page=${decodeVal.toString()}`;  
        }else if(e !== undefined && (e.target.value !== "") && (e.target.innerHTML === "")){
            foundCharacters = `/?name=${e.target.value}`;
        }else if((e !== undefined) && (e.target.value === "") && (e.target.innerHTML === "")){
            decodeVal = Math.floor((Math.random() * (42-1))+1);
            foundCharacters = `/?page=${decodeVal.toString()}`; 
        }else if((e !== undefined) && (e.target.value === undefined) && (e.target.innerHTML !== undefined)){
            nextNumPage = e.target.innerHTML;
            foundCharacters = `/?page=${nextNumPage}`; 
        }
        
        try {
            const fetchResult = await fetch(`https://rickandmortyapi.com/api/character${foundCharacters}`);
            const characters = await fetchResult.json();
            
            if (e === undefined) {
                for (let i = 0; i < 10; i++) {
                    thenListCharacters.push(characters.results[i]);
                }
            }else if(e !== undefined && (e.target.value !== "") && (e.target.innerHTML === "")){
                thenListCharacters = characters.results;
            }else if((e !== undefined) && (e.target.value === "") && (e.target.innerHTML === "")){
                for (let i = 0; i < 10; i++) {
                    thenListCharacters.push(characters.results[i]);
                }
            }else if((e !== undefined) && (e.target.value === undefined) && (e.target.innerHTML !== undefined)){
                thenListCharacters = characters.results;
                nextNumPage = parseInt(nextNumPage);
                setActualNumbPage(nextNumPage); 
            }


            setCharacters(thenListCharacters);
        } catch (error) {
            
        }

    };

    const fetchEpisodes = async () => {

        try {
            let fetchPicturesResult = [[]];
            let foundEpisodes = [12, 11, 11, 11, 11];

            for (let i = 1; i < 6; i++) {
                for (let m = 1; m < foundEpisodes[(i - 1)]; m++) {
                    const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${i}/episode/${m}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
                    fetchPicturesResult.push(await fetchResult.json());
                }
            }  
            setEpisodes(fetchPicturesResult);
        } catch (error) {
            
        }
    }

    const numbEpisodes = () => {
        let listNumbCharacterEpisode = [];
        for (let i = 0; i < (desployMoreOfCharacters.episode).length; i++) {
            listNumbCharacterEpisode.push(((desployMoreOfCharacters.episode[i]).toString()).replace("https://rickandmortyapi.com/api/episode/", ""));
        }
        return listNumbCharacterEpisode;
    }

    const nameEpisodes = () => {
        let listObjetEpisodes = {};
        let listConcatEpisodes = [];
        for (let m = 0; m < listCharacters.length; m++) {
                listObjetEpisodes = {
                    "name": listEpisodes[(parseInt(((listCharacters[m].episode[0]).toString()).replace("https://rickandmortyapi.com/api/episode/", "")))].name
                }
            listConcatEpisodes.push(listObjetEpisodes);
            listObjetEpisodes = {};
        }
        return listConcatEpisodes;
    }


    if (listCharacters !== "" && listEpisodes !== "" && desployMoreOfCharacters === "") {
        if (listCharacters !== undefined) {
            listCharactersEpisodes = nameEpisodes();
        }
        if (desplyMoreEpisodes !== 0) {
            setDesployMoreEpisodes(0)
        }
    }else if(desployMoreOfCharacters !== ""){
        if (listCharacters !== undefined) {
            listNumbCharacterEpisode = numbEpisodes();
        }
    }
    
    console.log(actualNumPage);

    if (viewMorePages === true) {
        if (actualNumPage <= 4) {
            numPagination = [1, 2, 3, 4, 5, 6, 7];
        }else if(actualNumPage >= 4){
            numPagination = [];
            if ((actualNumPage + 4) < 42) {
                for (let i = (actualNumPage - 3); i < (actualNumPage + 4); i++) {
                    numPagination.push(i);
                }
            }else if((actualNumPage + 4) > 42){
                numPagination = [36, 37, 38, 39, 40, 41, 42];
            }
        }
    };
    
    


    
    return (
        <ContenApp>
            <ContenInputSearch skin={desployMoreOfCharacters === "" ? "" : "Active"}>

                {viewMorePages === true ? 
                    <ContentNumPag>
                        {/* <NumArrow><FontAwesomeIcon icon={faCircleChevronLeft} /></NumArrow> */}
                        {
                            numPagination.map((numPagination, index) =>{
                                return (
                                    <NumPage key={index} skin={numPagination === actualNumPage ? "Active" : ""} onClick={fetchCharacters}>{numPagination}</NumPage>
                                )
                            })
                        }    
                        {/* <NumPage skin={"Active"}>{1}</NumPage> */}
                        {/* <NumArrow><FontAwesomeIcon icon={faCircleChevronRight} /></NumArrow> */}
                    </ContentNumPag>

                :
                    <InputSearch type="text" onKeyUp={fetchCharacters}></InputSearch>
                }

                
                <ContentViewAll>
                    {viewMorePages === true ? 
                        <ButtonPlus onClick={() => {setMorePages(false)}}>
                            <FontAwesomeIcon icon={faMattressPillow} />
                        </ButtonPlus>
                    :
                        <ButtonPlus onClick={() => {setMorePages(true)}}>
                            <FontAwesomeIcon icon={faBorderAll} />
                        </ButtonPlus>
                    }
                </ContentViewAll>
                

            </ContenInputSearch>


            <GlobalContentCardCharacter skin={desployMoreOfCharacters === "" ? "" : "Active"}>
                {listCharacters !== "" && listEpisodes !== "" ? 

                    <>
                        {desployMoreOfCharacters === "" ? 
                            listCharacters !== undefined ?
                                listCharacters.map((listCharacters, index) => {
                                    return (
                                        <BoxCard key={index}>
                                            <ContentImageCard>
                                                <ImageCard src={listCharacters.image}></ImageCard>
                                            </ContentImageCard>
                                            <ContentSlideDescript>
                                                <CapsuleStatus>
                                                    {listCharacters.status}
                                                </CapsuleStatus>
                                                <div>
                                                    {listCharacters.name}
                                                </div>
                                            </ContentSlideDescript>
                                            <ContentExtraInfo>
                                                <CapsuleInfo>
                                                    Specie: <div>{listCharacters.species}</div>
                                                </CapsuleInfo>
                                                <CapsuleInfo>
                                                    Type: <div>{listCharacters.type === "" ? " Unknow" : `${listCharacters.type}`}</div>
                                                </CapsuleInfo>

                                                <CapsuleInfo>
                                                    Episodes: <div>{listCharactersEpisodes[index].name}</div>
                                                </CapsuleInfo>

                                                <ButtonMore onClick={() => {setMoreOfCharacters(listCharacters)}}>
                                                    <FontAwesomeIcon icon={faCirclePlus} />
                                                </ButtonMore>
                                            </ContentExtraInfo>
                                        </BoxCard>
                                    )
                                            
                                })   
                            :
                            <></>    
                        :
                            <BrandDesployCharacter>
                                <CapsulePictureFocusCharacter>
                                    <StainFrontChainList></StainFrontChainList>
                                    <StainFrontBackground></StainFrontBackground>
                                    <StainFrontTop>
                                        <BannerNameFocusCharacter>
                                            <NameFocusCharacter>{desployMoreOfCharacters.name}</NameFocusCharacter>
                                            <a href={desployMoreOfCharacters.url}>{desployMoreOfCharacters.url}</a>
                                            <ContentWorld>
                                                <img src={ desployMoreOfCharacters.species === "Human" ? earthPic : PlanetPic}></img>
                                            </ContentWorld>
                                        </BannerNameFocusCharacter>
                                    </StainFrontTop>
                                    <PictureFocusCharacter src={`https://rickandmortyapi.com/api/character/avatar/${desployMoreOfCharacters.id}.jpeg`}></PictureFocusCharacter>
                                    <StainFrontChain></StainFrontChain>
                                    <StainFrontBottom>
                                        <BottomStatus onClick={() => {setMoreOfCharacters("")}}>
                                            <FontAwesomeIcon icon={faCircleChevronLeft} />
                                        </BottomStatus>
                                    </StainFrontBottom>
                                    <StainFrontList>
                                        <BottomList>
                                            <div>• Species: {desployMoreOfCharacters.species}</div>
                                            <div>• type: {desployMoreOfCharacters.type !== "" ? desployMoreOfCharacters.type : "unknow"}</div>
                                            <div>• Gender: {desployMoreOfCharacters.gender}</div>
                                            <div>• Status: {desployMoreOfCharacters.status}</div>
                                        </BottomList>
                                    </StainFrontList>
                                </CapsulePictureFocusCharacter>
                                <CapsulePicturesEpisodes>
                                    <ContentInfoPictureEpisode>
                                        <img src={`https://image.tmdb.org/t/p/original/${listEpisodes[listNumbCharacterEpisode[desplyMoreEpisodes]].still_path}`}></img>
                                        <div></div>
                                        <div></div>
                                    </ContentInfoPictureEpisode>
                                    <ContentInfoDataEpisode>
                                        <ContentInfoDataNameEpisode>{listEpisodes[listNumbCharacterEpisode[desplyMoreEpisodes]].name}</ContentInfoDataNameEpisode>
                                        <ContentInfoDataRate>
                                            <div>{listEpisodes[listNumbCharacterEpisode[desplyMoreEpisodes]].vote_average}</div>
                                            <div>%</div>
                                        </ContentInfoDataRate>
                                        <ContentInfoDataResumenEpisode>{listEpisodes[listNumbCharacterEpisode[desplyMoreEpisodes]].overview}</ContentInfoDataResumenEpisode>
                                    </ContentInfoDataEpisode>
                                    {listEpisodes[listNumbCharacterEpisode[desplyMoreEpisodes + 1]] === undefined ? 
                                        <></> 
                                    : 
                                        <ContentInfoNextEpisode onClick={() => {setDesployMoreEpisodes(desplyMoreEpisodes + 1)}}>
                                            <FontAwesomeIcon icon={faCircleArrowRight} />
                                        </ContentInfoNextEpisode>
                                    }
                                </CapsulePicturesEpisodes>
                            </BrandDesployCharacter>
                        }
                    </> 
                :
                    <></>
                }
            </GlobalContentCardCharacter>
        </ContenApp>
    )
}

export default ShowCharacters;