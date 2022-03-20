import React from "react"
import styled from 'styled-components';


export const CustomButtons = ({title, colorText, posX, posY, btnWidth, btnHeight,action}) =>  {

    console.log(btnWidth)
    return (
        <CustomButtonStyle
        BackGroundColor={colorText}
        PostionX={posX}
        PostionY={posY}
        btnWidth={btnWidth}
        btnHeight={btnHeight}
        onClick={action}>
            {title}
        </CustomButtonStyle>
    )

}

    
const CustomButtonStyle = styled.button`
    position: absolute;

    background: ${props => props.BackGroundColor ? props.BackGroundColor : "white"};
    top:${props => props.PostionY ? props.PostionY : '0%'};
    left: ${props => props.PostionX ? props.PostionX : "0%"};
    width: ${props => props.btnWidth ? props.btnWidth : "20%"};
    height: ${props => props.btnHeight ? props.btnHeight : "10%"};

    

    font-family: 'Roboto';
    font-style: italic;
    font-weight: bold;
    font-size: 24px;

    justify-content: center;
    /* background: #28A7EF;; */
;`

