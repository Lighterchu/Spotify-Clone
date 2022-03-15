import React from "react"
import styled from 'styled-components';
import { Searchbar } from "./Searchbar";
import { Musicinfo } from "./Musicinfo";
import { CustomButtons } from "./CustomButtons";
import {Header} from './Header';
import {Sidebar} from './Sidebar';


export const Maininfo = () =>  {
    return (
        <>
        <MainBox>
            <Header title={"Spotify Clone"}/>
            <Searchbar />
            <Sidebar />
            <Musicinfo />
            
            <CustomButtons 
                    title={"Add Song"} 
                    colorText={"Green"}  
                    posX={'13%'}
                    posY={'80%'}
                />
                <CustomButtons 
                    title={"Remove Song"} 
                    colorText={"Green"} 
                    posX={'35%'} 
                    posY={'80%'}
                />
            </MainBox>
        </>
    )
}

const MainBox = styled.div`
  position: absolute;
    width: 100%;
    height: 100%;

    /* top: 2%;
    left: 2%; */
    
   

    justify-content: center;
    /* background: #BD0DC0; */
;`
   

