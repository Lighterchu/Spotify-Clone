import React from "react"
import styled from 'styled-components';



export const Searchbar = () =>  {
  
  return (
    <SearBarBox>
      <SearchBar
          placeholder="Enter a song here ">
      </SearchBar>
    </SearBarBox>
  )
 
}

const SearBarBox = styled.div`
  position: absolute;
    width: 70%;
    height: 10%;

    left: 13% ;
    top: 8vh ;

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
    