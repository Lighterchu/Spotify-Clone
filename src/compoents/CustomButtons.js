import React from "react"
import styled from 'styled-components';


export const CustomButtons = ({title, colorText, posX, posY}) =>  (
   <CustomButtonStyle
   BackGroundColor={colorText}
   PostionX={posX}
   PostionY={posY}>
       {title}
   </CustomButtonStyle>
)

    
const CustomButtonStyle = styled.button`
    position: absolute;

    background: ${props => props.BackGroundColor ? props.BackGroundColor : "white"};
    top:${props => props.PostionY ? props.PostionY : '0%'};
    left: ${props => props.PostionX ? props.PostionX : "0%"};

    width: 20%;
    height: 10%;

    justify-content: center;
    /* background: #28A7EF;; */
;`

