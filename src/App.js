import {Login} from "./Views/Login";
import { useEffect, useState } from 'react';
import {accessUrl} from './Helpers/spotifyLogic';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {Maininfo} from './compoents/Maininfo'
import "./App.css";
function App() {

    const [token, setToken] = useState("")
    

    useEffect(() => {
        const hash = window.location.hash
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("access_token",_token)
        setToken(_token)
    },[])
    return !token ? (<Login logged={token}/>) : (
        <>
        <Maininfo />
            <Router>
            
            </Router>
        </>
    );
  }
  
  export default App;
  