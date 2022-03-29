import {Login} from "./Views/Login";
import { useEffect, useState } from 'react';
import {accessUrl} from './Helpers/spotifyLogic';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {Maininfo} from './compoents/Maininfo'
import "./App.css";
function App() {

    const [token, setToken] = useState("")
    const [login, setLoging] = useState(false)
    

    useEffect(() => {
        const hash = window.location.hash
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("access_token",_token)
        setToken(_token)
        setLoging(true)
    },[])
    return !token ? (<Login logged={login}/>) : (
        <>
        <Maininfo />
            <Router>
                <Routes path="/test" element={<Login  />}/>

                
            </Router>
        </>
    );
  }
  
  export default App;
  