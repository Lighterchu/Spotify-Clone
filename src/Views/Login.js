import React from "react";
import styled from 'styled-components';
// import "./Login.css";
// import { accessUrl } from "./spotify";

 export const Login = () => {
   return (
    <TitleBox>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      
      
      <p>
        Please login, once logged in, you will be able to access you profile where you can remove songs/ add songs <br />
      <hr />

      </p>
      <h1>This is spotify clone and just a project, I do not plan to make money from this web app</h1>
     

    </TitleBox>
   )
    
  
}

const TitleBox = styled.div`
  position: absolute;
    width: 58%;
    height: 40px;
    padding-bottom: 15px;

    margin-top: 10% ;
    margin-left: 20% ;

    color: red ;

    justify-content: center;
    /* background: #BD0DC0; */

  
`;
  
