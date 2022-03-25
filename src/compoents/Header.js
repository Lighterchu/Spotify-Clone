import React from "react"
import styled from 'styled-components';
export const Header = ({title,userLoggedIn}) =>  {
    return (
        <TitleBox>
            <Title>{title}</Title>
            {/* <button>{!userLoggedIn ? "login" : "logout"}</button> */}
        </TitleBox>
    )
}
   
    
        

const TitleBox = styled.div`
  position: absolute;
    width: 100%;
    height: 40px;
    padding-bottom: 15px;

    justify-content: center;
    background: lightblue;
`;

const Title = styled.h1`
position: absolute;

width: 170;
height: 120;

text-align: center;
padding-left: 2px;

margin-left: 45%;

background-color: red;

font-family: 'Roboto';
font-style: italic;
font-weight: bold;
font-size: 24px;
line-height: 28px;

border-radius: 3%;


color: #000000;

`


