import React from "react"
import styled from 'styled-components';
import {TrackList} from './TrackList'



export const Musicinfo = ({playList}) =>  {
    // console.log(playList["body"].tracks.items[3]["track"].name)
    return ( 
    <MusicInfoBox>
        
        <PlayListTitle>Your Play List {"#Hardstyle bangers"}</PlayListTitle>
        <MusicListBox>
            <TrackList name={playList["body"].tracks.items[1]["track"].name} />
            <TrackList name={playList["body"].tracks.items[2]["track"].name} />
            <TrackList name={playList["body"].tracks.items[3]["track"].name} />
            <TrackList name={playList["body"].tracks.items[4]["track"].name} />
            <TrackList name={playList["body"].tracks.items[5]["track"].name} />
            <TrackList name={playList["body"].tracks.items[6]["track"].name} />
            <TrackList name={playList["body"].tracks.items[7]["track"].name} />
            <TrackList name={playList["body"].tracks.items[8]["track"].name} />
            <TrackList name={playList["body"].tracks.items[9]["track"].name} />
            <TrackList name={playList["body"].tracks.items[10]["track"].name} />
            <TrackList name={playList["body"].tracks.items[11]["track"].name} />
            <TrackList name={playList["body"].tracks.items[12]["track"].name} />
            <TrackList name={playList["body"].tracks.items[13]["track"].name} />
            <TrackList name={playList["body"].tracks.items[14]["track"].name} />
            <TrackList name={playList["body"].tracks.items[15]["track"].name} />
            <TrackList name={playList["body"].tracks.items[16]["track"].name} />
            <TrackList name={playList["body"].tracks.items[17]["track"].name} />
            <TrackList name={playList["body"].tracks.items[18]["track"].name} />
           
       
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

    top: 15%;
    left: 2%;

    justify-content: center;
    background: white;
;`
    