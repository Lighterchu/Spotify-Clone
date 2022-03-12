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
    width: 100%;
    height: 100%;

    top: 15%;

    justify-content: center;
    background: #EA2626;
;`
   
const MusicListBox = styled.div`
    position: absolute;
    width: 95%;
    height: 80%;

    top: 15%;
    left: 2%;

    justify-content: center;
    background: #28A7EF;;
;`
    