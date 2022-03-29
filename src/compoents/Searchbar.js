import React from "react"
import styled from 'styled-components';



export const Searchbar = ({onDataPassEvent,posX, posY, btnWidth, btnHeight, title, colorText}) =>  {
  
  
  return (
    <SearBarBox
          PostionX={posX}
          PostionY={posY}
          btnWidth={btnWidth}
          btnHeight={btnHeight}>
      <SearchBar
          onKeyUp={onDataPassEvent ? onDataPassEvent : console.log("Addevent to me ")}
          BackGroundColor={colorText}
          placeholder={title ? title : "search song"}
          >
      </SearchBar>
    </SearBarBox>
  )
 
}

const SearBarBox = styled.div`
  position: absolute;
    
  top:${props => props.PostionY ? props.PostionY : '8vh'};
  left: ${props => props.PostionX ? props.PostionX : "13%"};
  width: ${props => props.btnWidth ? props.btnWidth : "70%"};
  height: ${props => props.btnHeight ? props.btnHeight : "10%"};
  background: ${props => props.BackGroundColor ? props.BackGroundColor : "white"};


    justify-content: center;
    background: #EA2626;
;`
   
const SearchBar  = styled.input`
   position: absolute;
     width: 100%;
     height: 100%;
    
     text-align: center;
     font-size: 28px;

     color: black;

     background: lightblue;
 ;`
    