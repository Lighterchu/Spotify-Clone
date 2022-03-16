import React from "react"
import styled from 'styled-components';


export const Musicinfo = () =>  (
    <MusicInfoBox>
        <MusicListBox>

        </MusicListBox>
    </MusicInfoBox>
)

const MusicInfoBox = styled.div`
    position: absolute;
    width: 50.7%;
    height: 60%;

    top: 20%;
    left: 13%;

    justify-content: center;
    background: lightblue;
;`
   
const MusicListBox = styled.div`
    position: absolute;
    width: 95%;
    height: 80%;

    top: 15%;
    left: 2%;

    justify-content: center;
    background: black;
;`
    