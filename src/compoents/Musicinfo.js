import React from "react"
import styled from 'styled-components';
import {TrackList} from './TrackList'




export const Musicinfo = ({playList}) =>  {
    // if (playList === object.keys(playList).length === 0 ){ console.log("this is a empty table")}
    let allTracks = []
    let holdAllTrackNames = []
    let trackName = "loading"
    
    

   const genrateTracks = () => {
    if(playList && playList["body"]){
        allTracks = playList["body"].tracks.items
       
        console.log(playList["body"])
       return allTracks.map((alltracks) => 
            <TrackList name={alltracks.track.name}/>
        )
    }
   }

//    return movieData.map((movies,index) => <MovieCard key={index}content={movies}/>)
    if(playList && playList["body"] && playList["body"].tracks && playList["body"].tracks.items) {
      
        // trackName = playList["body"].tracks.items[2]["track"].name
    }
    return ( 
    <MusicInfoBox>
        
        <PlayListTitle>Your Play List {"#Hardstyle bangers"}</PlayListTitle>
        <MusicListBox>
            
            {genrateTracks()}
    
        </MusicListBox>
    </MusicInfoBox>
    )
   
}


const MusicInfoBox = styled.div`
    position: absolute;
    width: 70.7%;
    height: 60%;

    

    top: 20%;
    left: 13%;

    justify-content: center;
    background: lightblue;
;`

const PlayListTitle = styled.h1`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    justify-content: center;
    color: black
;`
   
const MusicListBox = styled.div`
    position: absolute;
    width: 95%;
    height: 80%;
    
    overflow: auto;

    top: 15%;
    left: 2%;

    // justify-content: center;
    background: white;
;`
    