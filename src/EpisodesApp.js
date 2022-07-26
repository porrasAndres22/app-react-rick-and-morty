import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleChevronRight, faCircleChevronDown, faSquareMinus, faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ContentGlobalEpisodes,
         ContentArrowRegrese,
         ContentButtonRegrese,
         ContentCreateList,
         ContentGlobalList,
         ContentAllList,
         ContentList,
         CapsuleList,
         ContentHeaderEpisodes,
         ContentAllEpisodes,
         CapsuleEpisodes } from "./elements/viewEpisodes";
import { NavLink } from 'react-router-dom';


const EpisodesApp = () => {
    
    const [collectionListEpisodes, setCollectionListEpisodes] = useState("");
    const [collectionFetchListEpisodes, setCollectionFetchListEpisodes] = useState("");
    const [statusList, setStatusList] = useState("");

    const [listEpisodes, setListEpisodes] = useState("");
    const [seasonSelect, setSeasonSelect] = useState(0);

    useEffect(() => {
        fetchResultListEpisodes();
        fetcListhEpisodes();
    },[])

    const closeSession = () => {
        window.location.href = "/";
    }

    const fetchResultListEpisodes = async () => {
        const fetchResult = await fetch(`https://aplicationapirest.xyz/episodes`);
        const fetchListEpisdes = await fetchResult.json();
        let partialFetchEpisodes = fetchListEpisdes;
        if(fetchListEpisdes !== []){

            for (let i = 0; i < partialFetchEpisodes.length; i++) {
                for (let m = 0; m < partialFetchEpisodes[i].episodes.length; m++) {

                    let lol = (partialFetchEpisodes[i].episodes[m]).split("_");
                    lol[0] = parseInt(lol[0]);
                    lol[1] = parseInt(lol[1]);
                    lol[2] = parseInt(lol[2]);

                    if(lol[1] === 2){
                        lol[2] = lol[2] + 11;
                    }else if(lol[2] === 3){
                        lol[2] = lol[2] + 21;
                    }else if(lol[2] === 4){
                        lol[2] = lol[2] + 31;
                    }else if(lol[2] === 5){
                        lol[2] = lol[2] + 41;
                    }

                    partialFetchEpisodes[i].episodes[m] = {
                        id: lol[0],
                        season: lol[1],
                        ep: lol[2]
                    }
                }
            }
            setCollectionListEpisodes(fetchListEpisdes);
        }
    }

    const fetcListhEpisodes = async () => {
        const arraySeason = [0,12, 11, 11, 11, 11];
        let fetchEpisodes = [[]];
        for (let i = 1; i < 6; i++){
            for (let m = 1; m < arraySeason[i]; m++) {
                const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${i}/episode/${m}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
                fetchEpisodes.push(await fetchResult.json());
            }
        }    
        setStatusList("0");    
        setCollectionFetchListEpisodes(fetchEpisodes);
    }

    const ViewSeasonList = (e) => {
        let viewSeasonList = "";
        let listEpisode = 0;
        
        if (e.target.tagName === "path") {
            viewSeasonList = e.target.parentElement.parentElement.parentElement.children[0].innerHTML;
            listEpisode = (e.target.parentElement.parentElement.parentElement.parentElement.children[1].childNodes).length;
        }else if (e.target.tagName === "svg") {
            viewSeasonList = e.target.parentElement.parentElement.children[0].innerHTML;
            listEpisode = (e.target.parentElement.parentElement.parentElement.children[1].childNodes).length;
        }
        if(listEpisode < 6){
            setStatusList(viewSeasonList);
        }
    }

    const fetchCreateListEpisodes = async (e) => {

        let inputList = "";

        if (e.target.tagName === "path") {
            inputList = e.target.parentElement.parentElement.parentElement.children[0].value
        }else if (e.target.tagName === "svg") {
            inputList = e.target.parentElement.parentElement.children[0].value
        }

        if (inputList !== ""){
            const newList = {
                "name": inputList,
                "episodes": []
            }
    
            const fetchResult = await fetch(`https://aplicationapirest.xyz/episodes/createpisodes`,{
                method: 'POST',
                body: JSON.stringify(newList),
                headers: { 'Content-Type': 'application/json' }
            });
            
        }
        fetchResultListEpisodes();
        setStatusList("");
    }

    const fecthEpisodes = async (e) => {

        const arraySeason = [0, 12, 11, 11, 11, 11];
        let fetchEpisodes = [];
        let numbSeason = "";
        if(e.target.tagName === "path"){
            numbSeason = parseInt(e.target.parentElement.parentElement.id);
        }else if(e.target.tagName === "svg"){
            numbSeason = parseInt(e.target.parentElement.id);
        }

        for (let i = 1; i < arraySeason[numbSeason]; i++){
            const fetchResult = await fetch(`https://api.themoviedb.org/3/tv/60625/season/${numbSeason}/episode/${i}?api_key=2281fd7c96be9cd37e5fed3bdb254181`);
            fetchEpisodes.push(await fetchResult.json());
        }
        
        setSeasonSelect(numbSeason);
        setListEpisodes(fetchEpisodes);
    }

    const postEpisode = async (e) => {
        let idEpisode = "";
        if(e.target.id === ""){
            idEpisode = e.target.parentElement.id;
        }else if (e.target.id !== ""){
            idEpisode = e.target.id;
        }
        
        const arrayIdEpisode = idEpisode.split("_");

        const newEpisode = {   
            "name": statusList,
            "episodes": `${arrayIdEpisode[0]}_${arrayIdEpisode[1]}`
        }



        const fetchResult = await fetch(`https://aplicationapirest.xyz/episodes/insertepisodes`,{
                method: 'POST',
                body: JSON.stringify(newEpisode),
                headers: { 'Content-Type': 'application/json' }
        });

        fetchResultListEpisodes();
        setStatusList("");
        

    }

    const deleteFetch = async (e) => {
        let idDelete = "";
        let nameList = "";
        if (e.target.tagName === "path") {
            idDelete = e.target.parentElement.parentElement.id;
            nameList = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].innerHTML;
        }else if (e.target.tagName === "svg") {
            idDelete = e.target.parentElement.id;
            nameList = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].innerHTML;
        }

        const deleteEpisode = {
            "name": nameList,
            "episodes": idDelete
        }

        const fetchResult = await fetch(`https://aplicationapirest.xyz/episodes/deletepisodes`, {
            method: 'POST',
            body: JSON.stringify(deleteEpisode),
            headers: { 'Content-Type': 'application/json' }
        });

        fetchResultListEpisodes();

    }

    return (  
        <ContentGlobalEpisodes>
            <ContentArrowRegrese>
                {statusList === "" || statusList === "0"? 
                    <ContentButtonRegrese onClick={closeSession}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </ContentButtonRegrese>
                :
                    <ContentButtonRegrese onClick={() => {setStatusList("")}}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                    </ContentButtonRegrese>                     
                }
                <ContentCreateList>
                    <input placeholder="Create List"></input>
                    <div onClick={fetchCreateListEpisodes}><FontAwesomeIcon icon={faCircleChevronRight} /></div>
                </ContentCreateList>
            </ContentArrowRegrese>
            <ContentGlobalList>
                {statusList === "" || statusList === "0" ? 
                    <ContentAllList>
                        {collectionListEpisodes !== "" ?
                            collectionFetchListEpisodes !== "" ?
                                collectionListEpisodes.map((collectionListEpisodes, index) => {
                                    return (
                                        <ContentList key={index}>
                                            <CapsuleList id="capsule list">
                                                <ContentHeaderEpisodes>
                                                    <div>{collectionListEpisodes.name}</div>
                                                    <div onClick={ViewSeasonList}><FontAwesomeIcon icon={faCirclePlus} /></div>
                                                </ContentHeaderEpisodes>
                                                <ContentAllEpisodes>
                                                    
                                                    {
                                                    (collectionListEpisodes.episodes).map((collectionListEpisodes, index) => {
                                                        return (
                                                            <CapsuleEpisodes key={index}>
                                                                <img src={`https://image.tmdb.org/t/p/original${collectionFetchListEpisodes[collectionListEpisodes.ep].still_path}`}></img>
                                                                <div>{`S${collectionListEpisodes.season}E${collectionFetchListEpisodes[collectionListEpisodes.ep].episode_number}. ${collectionFetchListEpisodes[collectionListEpisodes.ep].name} `}</div>
                                                                <div id={`${collectionListEpisodes.id}_${collectionListEpisodes.season}_${collectionFetchListEpisodes[collectionListEpisodes.ep].episode_number}`} onClick={deleteFetch}><FontAwesomeIcon icon={faSquareMinus} /></div>
                                                            </CapsuleEpisodes>
                                                        )
                                                    })
                                                    }

                                                </ContentAllEpisodes>
                                            </CapsuleList>
                                        </ContentList>
                                    )
                                })

                            :
                            <></>
                        :
                            <></>
                        }
                    </ContentAllList>
                :
                    <ContentAllList>
                        <ContentList>
                            <CapsuleList>

                                <ContentHeaderEpisodes skin="Active">
                                    <div>Temporada 1</div>
                                    <div id="1" onClick={fecthEpisodes}>
                                        <FontAwesomeIcon onClick={fecthEpisodes} icon={faCircleChevronDown} />
                                    </div>
                                </ContentHeaderEpisodes>
                                <ContentAllEpisodes>
                                    {(listEpisodes !== "") && (seasonSelect === 1) ? 
                                        
                                        listEpisodes.map((listEpisodes, index) => {
                                            return (
                                                <CapsuleEpisodes onClick={postEpisode} id={`${listEpisodes.season_number}_${listEpisodes.episode_number}`} key={index}>
                                                    <img src={`https://image.tmdb.org/t/p/original${listEpisodes.still_path}`}></img>
                                                    <div>{`${listEpisodes.episode_number}. ${listEpisodes.name}`}</div>
                                                </CapsuleEpisodes>
                                            )
                                        })
                                    :
                                    <></>    
                                    }
                                </ContentAllEpisodes>

                                <ContentHeaderEpisodes skin="Active">
                                    <div>Temporada 2</div>
                                    <div id="2" onClick={fecthEpisodes}>
                                        <FontAwesomeIcon  onClick={fecthEpisodes} icon={faCircleChevronDown} />
                                    </div>
                                </ContentHeaderEpisodes>
                                <ContentAllEpisodes>
                                    {(listEpisodes !== "") && (seasonSelect === 2) ? 
                                            
                                            listEpisodes.map((listEpisodes, index) => {
                                                return (
                                                    <CapsuleEpisodes onClick={postEpisode} id={`${listEpisodes.season_number}_${listEpisodes.episode_number}`} key={index}>
                                                        <img src={`https://image.tmdb.org/t/p/original${listEpisodes.still_path}`}></img>
                                                        <div>{`${listEpisodes.episode_number}. ${listEpisodes.name}`}</div>
                                                    </CapsuleEpisodes>
                                                )
                                            })
                                        :
                                        <></>    
                                        }
                                </ContentAllEpisodes>


                                <ContentHeaderEpisodes skin="Active">
                                    <div>Temporada 3</div>
                                    <div id="3" onClick={fecthEpisodes}>
                                        <FontAwesomeIcon  onClick={fecthEpisodes} icon={faCircleChevronDown} />
                                    </div>
                                </ContentHeaderEpisodes>
                                <ContentAllEpisodes>
                                    {(listEpisodes !== "") && (seasonSelect === 3) ? 
                                        
                                        listEpisodes.map((listEpisodes, index) => {
                                            return (
                                                <CapsuleEpisodes onClick={postEpisode} id={`${listEpisodes.season_number}_${listEpisodes.episode_number}`} key={index}>
                                                    <img src={`https://image.tmdb.org/t/p/original${listEpisodes.still_path}`}></img>
                                                    <div>{`${listEpisodes.episode_number}. ${listEpisodes.name}`}</div>
                                                </CapsuleEpisodes>
                                            )
                                        })
                                    :
                                    <></>    
                                    }
                                </ContentAllEpisodes>


                                <ContentHeaderEpisodes skin="Active">
                                    <div>Temporada 4</div>
                                    <div id="4" onClick={fecthEpisodes}>
                                        <FontAwesomeIcon  onClick={fecthEpisodes} icon={faCircleChevronDown} />
                                    </div>
                                </ContentHeaderEpisodes>
                                <ContentAllEpisodes>
                                    {(listEpisodes !== "") && (seasonSelect === 4) ? 
                                        
                                        listEpisodes.map((listEpisodes, index) => {
                                            return (
                                                <CapsuleEpisodes onClick={postEpisode} id={`${listEpisodes.season_number}_${listEpisodes.episode_number}`} key={index}>
                                                    <img src={`https://image.tmdb.org/t/p/original${listEpisodes.still_path}`}></img>
                                                    <div>{`${listEpisodes.episode_number}. ${listEpisodes.name}`}</div>
                                                </CapsuleEpisodes>
                                            )
                                        })
                                    :
                                    <></>    
                                    }
                                </ContentAllEpisodes>

                                <ContentHeaderEpisodes skin="Active">
                                    <div>Temporada 5</div>
                                    <div id="5" onClick={fecthEpisodes}>
                                        <FontAwesomeIcon  onClick={fecthEpisodes} icon={faCircleChevronDown} />
                                    </div>
                                </ContentHeaderEpisodes>
                                <ContentAllEpisodes>
                                    {(listEpisodes !== "") && (seasonSelect === 5) ? 
                                        
                                        listEpisodes.map((listEpisodes, index) => {
                                            return (
                                                <CapsuleEpisodes onClick={postEpisode} id={`${listEpisodes.season_number}_${listEpisodes.episode_number}`} key={index}>
                                                    <img src={`https://image.tmdb.org/t/p/original${listEpisodes.still_path}`}></img>
                                                    <div>{`${listEpisodes.episode_number}. ${listEpisodes.name}`}</div>
                                                </CapsuleEpisodes>
                                            )
                                        })
                                    :
                                    <></>    
                                    }
                                </ContentAllEpisodes>

                            </CapsuleList>
                        </ContentList>
                    </ContentAllList>
                }
            </ContentGlobalList>
        </ContentGlobalEpisodes>
    );
}
 
export default EpisodesApp;