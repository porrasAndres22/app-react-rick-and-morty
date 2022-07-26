import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ContenApp } from "../elements/GlobalContent.js";
import { GlobalContentCardCharacter,
         BoxCard,
         ContentImageCard,
         ImageCard,
         ContentSlideDescript,
         CapsuleStatus,
         ContentExtraInfo,
         CapsuleInfo, } from '../elements/CharacterCards.js';
import { ContenInputSearch, InputSearch} from "../elements/InputSearch.js";
import { CapsuleCardsEpisodes, 
         ContentPictureEpisodes, 
         ContentDataEpisode, 
         PictureEpisodes,
         ContentShowEpisodes,
         CapsuleEpisodes,
         ContentAllEpisodes,
         ButtonCharacter
        } from "../elements/EpisodesCards.js";
import { CapsulePicturesEpisodes,
         ContentInfoPictureEpisode, 
         ContentInfoDataEpisode,
         ContentInfoDataRate,
         ContentInfoDataNameEpisode, 
         ContentInfoDataResumenEpisode} from '../elements/DesplyCharacter.js';         
import { ContentButtonRegrese } from '../elements/viewEpisodes.js';

const ShowEpisodes = () => {

    const [listSeason, setSeason] = useState("");
    const [desployMoreSeason, setDesployMoreSeason] = useState("");
    const [lisSeasonEpisodes, setSeasonEpisodes] = useState("");
    const [desployMoreCharacters, setDesployMoreCharacters] = useState("");

    useEffect(() => {
        fetchSeason();
    },[]);


    const fetchSeason = async() => {
        let season = [];
        try {
            for (let i = 1; i < 6; i++) {
                const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${i}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
                season.push(await fetchResult.json());
            }
            setSeason(season);
        } catch (error) {
            
        }
    }


    const fetchSeasonEpisodes = async(e) => {

        try {
            if(e.target.tagName === "INPUT") {
                const foundEpisode = e.target.value;

                if(foundEpisode !== ""){
                    const episodeSeach = "episodeSeach";
                    const fetchResultApi = await fetch(`https://rickandmortyapi.com/api/episode/?name=${foundEpisode}`);
                    const fetchEpisodesFound = await fetchResultApi.json();
                    const listFoundEpisodes = await fetchEpisodesFound.results;
                    let setEpisodesRun = [];
    
                    
                    for (let i = 0; i < listFoundEpisodes.length; i++) {
                        let destrucEpisodeName = `${listFoundEpisodes[i].episode[1]}${listFoundEpisodes[i].episode[2]}_${listFoundEpisodes[i].episode[4]}${listFoundEpisodes[i].episode[5]}`;
                        let partialSPlitEpisodeName = destrucEpisodeName.split("_");
                        let objetpartialName = {
                            season: parseInt(partialSPlitEpisodeName[0]),
                            episode: parseInt(partialSPlitEpisodeName[1])
                        }
                        const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${objetpartialName.season}/episode/${objetpartialName.episode}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
                        const jsonResult = await fetchResult.json();
                        setEpisodesRun.push(jsonResult);
                    }
                    setSeasonEpisodes(setEpisodesRun);
                    setDesployMoreSeason(episodeSeach);
                }
                



            }else if (e.target.tagName === "IMG") {

                let fetchEpisodesResults = [];
                const foundEpisodes = [0, 12, 11, 11, 11, 11];
                const numberSeason = e.target.id; 

                for (let i = 1; i < foundEpisodes[numberSeason]; i++) {
                    const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${numberSeason}/episode/${i}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
                    fetchEpisodesResults.push(await fetchResult.json());
                }
                setSeasonEpisodes(fetchEpisodesResults);
                setDesployMoreSeason(numberSeason);
            }
            


            




        } catch (error) {
            
        }

    }

    const fetchCharactersEpisode = async(e) => {
        
        let numberEpisode = "";
        let numberSeason = parseInt(desployMoreSeason);
        if(numberSeason === 1){
            numberEpisode = e.target.id;
        }else if(numberSeason === 2){
            numberEpisode = parseInt(e.target.id) + 11;
        }else if(numberSeason === 3){
            numberEpisode = parseInt(e.target.id) + 21;
        }else if(numberSeason === 4){
            numberEpisode = parseInt(e.target.id) + 31;
        }else if(numberSeason === 5){
            numberEpisode = parseInt(e.target.id) + 41;
        }
        let fetchResultCharacterList = [];
        
        try {
            const fetchResult = await fetch(`https://rickandmortyapi.com/api/episode/${numberEpisode}`);
            const charactersEpisode = await fetchResult.json();

            for (let i = 0; i < (charactersEpisode.characters).length; i++) {
                const fetchResultCharacters = await fetch(charactersEpisode.characters[i]);
                fetchResultCharacterList.push(await fetchResultCharacters.json());
            }
            setDesployMoreCharacters(fetchResultCharacterList);
        } catch (error) {
            
        }

    }

    return(
        <ContenApp>
            <ContenInputSearch>

                {desployMoreSeason === ""  && desployMoreCharacters === "" ?
                    listSeason !== "" ?
                        <></>
                        // <ContentButtonRegrese onClick={()=>{setSeason("")}}>
                        //     <FontAwesomeIcon icon={faCircleArrowLeft} />
                        // </ContentButtonRegrese>
                    :
                    <></>
                : desployMoreSeason !== ""  && desployMoreCharacters === "" ?
                    <ContentButtonRegrese onClick={()=>{setDesployMoreSeason("")}}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </ContentButtonRegrese> 
                : desployMoreSeason !== ""  && desployMoreCharacters !== "" ?
                    <ContentButtonRegrese onClick={()=>{setDesployMoreCharacters("")}}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </ContentButtonRegrese> 
                :
                <></>
                }
                <InputSearch onKeyUp={fetchSeasonEpisodes}></InputSearch>
            </ContenInputSearch>
            <GlobalContentCardCharacter skin={desployMoreSeason === "" ? "" : "Active"}>
                {desployMoreSeason === ""  && desployMoreCharacters === "" ?
                    listSeason !== "" ?
                        listSeason.map((listSeason, index) => {
                            return(
                                <CapsuleCardsEpisodes key={index}>
                                    <ContentPictureEpisodes>
                                        <PictureEpisodes></PictureEpisodes>
                                        <PictureEpisodes onClick={fetchSeasonEpisodes} id={listSeason.season_number} src={`https://image.tmdb.org/t/p/original${listSeason.poster_path}`}></PictureEpisodes>
                                    </ContentPictureEpisodes>
                                    <ContentDataEpisode>
                                        <div>{listSeason.name}</div>
                                        <div>{listSeason.overview}</div>
                                        <div>{`airDate: ${listSeason.air_date}`}</div>
                                    </ContentDataEpisode>
                                </CapsuleCardsEpisodes>
                            )
                        })
                    : 
                    <></>   
                : desployMoreSeason !== ""  && desployMoreCharacters === "" ?
                    <ContentShowEpisodes>
                        <ContentAllEpisodes>
                            {lisSeasonEpisodes.map((lisSeasonEpisodes, index) => {
                                    return(
                                        <CapsuleEpisodes key={index}>
                                            <CapsulePicturesEpisodes>
                                                <ContentInfoPictureEpisode>
                                                    <img src={`https://image.tmdb.org/t/p/original/${lisSeasonEpisodes.still_path}`}></img>
                                                    <div></div>
                                                    <div></div>
                                                </ContentInfoPictureEpisode>
                                                <ContentInfoDataEpisode>
                                                    <ContentInfoDataNameEpisode>{lisSeasonEpisodes.name}</ContentInfoDataNameEpisode>
                                                    <ContentInfoDataRate>
                                                        <div>{lisSeasonEpisodes.vote_average}</div>
                                                        <div>%</div>
                                                    </ContentInfoDataRate>
                                                    <ContentInfoDataResumenEpisode>{lisSeasonEpisodes.overview}</ContentInfoDataResumenEpisode>
                                                    <ButtonCharacter id={`${lisSeasonEpisodes.episode_number}`} onClick={fetchCharactersEpisode}>See Characters</ButtonCharacter>
                                                </ContentInfoDataEpisode>
                                            </CapsulePicturesEpisodes>
                                        </CapsuleEpisodes>

                                    )
                                })
                                }
                        </ContentAllEpisodes>
                    </ContentShowEpisodes>
                : desployMoreSeason !== ""  && desployMoreCharacters !== "" ? 
                    <ContentShowEpisodes>
                        <ContentAllEpisodes>
                            {desployMoreCharacters.map((desployMoreCharacters, index) => {
                                return (
                                    <BoxCard key={index}>
                                        <ContentImageCard>
                                            <ImageCard src={desployMoreCharacters.image}></ImageCard>
                                        </ContentImageCard>
                                        <ContentSlideDescript>
                                            <CapsuleStatus>
                                                {desployMoreCharacters.status}
                                            </CapsuleStatus>
                                            <div>
                                                {desployMoreCharacters.name}
                                            </div>
                                        </ContentSlideDescript>
                                        <ContentExtraInfo>
                                            <CapsuleInfo>
                                                Specie: <div>{desployMoreCharacters.species}</div>
                                            </CapsuleInfo>
                                            <CapsuleInfo>
                                                Type: <div>{desployMoreCharacters.type === "" ? " Unknow" : `${desployMoreCharacters.type}`}</div>
                                            </CapsuleInfo>

                                        </ContentExtraInfo>
                                    </BoxCard>
                                )
                            })}
                        </ContentAllEpisodes>
                    </ContentShowEpisodes>                    
                :
                <></>
                }
            </GlobalContentCardCharacter>
        </ContenApp>

    )
}

export default ShowEpisodes;