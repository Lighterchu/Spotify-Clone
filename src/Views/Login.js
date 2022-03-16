import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import {Maininfo} from '../compoents/Maininfo';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import "./Login.css";
// import { accessUrl } from "./spotify";


 export const Login = () => {
   const CLIENT_ID = '3e8375a239cf4b5b9b7d0c7cf7b577ce'
   const REDIRECT_URL = 'http://localhost:3000/maininfo'
   const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
   const RESPONSE_TYPE = 'token'

   const [token, setToken] = useState("")

   useEffect(() =>{
     const hash = window.location.hash
     let token = window.localStorage.getItem("token")
    console.log(token)
     if(!token && hash){
      token = hash.substring(1).split('&').find(element => element.startsWith("access_token")).split('=')[1]
      console.log(token)
     }
     console.log("work bitch")
   },[])

   return (
    // <TitleBox>
    //   <img
    //     src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
    //     alt=""
    //   />
      
      
    //   <p>
    //     Please login, once logged in, you will be able to access you profile where you can remove songs/ add songs <br />
    //   <hr />

    //   </p>
    //   <h1>This is spotify clone and just a project, I do not plan to make money from this web app</h1>
    //   
   

    // </TitleBox>

     <Router>
          <Routes>
            <Route path='/login' element={ <Login />}/>
            <Route path='/maininfo' element={ <Maininfo />}/>
          </Routes>
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`} >LOGIN</a>
    </Router>
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
    background: #BD0DC0;

  
`;
  
