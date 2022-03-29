import React from "react"
import styled from 'styled-components';
import {TrackList} from './TrackList'




export const Musicinfo = ({playList}) =>  {
   const genrateTracks = () => {
        if(playList && Object.keys(playList).length > 0) {
           return playList.map((track) => {           
               return <TrackList name={track.name} trackHref={track.id}/>
           })
       }
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
    