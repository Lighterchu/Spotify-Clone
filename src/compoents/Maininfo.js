import React from "react"
import styled from 'styled-components';
import { Searchbar } from "./Searchbar";
import { Musicinfo } from "./Musicinfo";
import { CustomButtons } from "./CustomButtons";


export const Maininfo = () =>  {
    return (
        <MainBox>
            <Searchbar />
            <Musicinfo />
            <CustomButtons 
                title={"Add Song"} 
                colorText={"Green"}  
                posY={'120%'}
            />
            <CustomButtons 
                title={"Remove Song"} 
                colorText={"Green"} 
                posX={'22%'} 
                posY={'120%'}
            />
        </MainBox>
    )
}

const MainBox = styled.div`
  position: absolute;
    width: 60%;
    height: 70%;

    top: 143px;
    left: 206px;
    
   

    justify-content: center;
    /* background: #BD0DC0; */
;`
   

