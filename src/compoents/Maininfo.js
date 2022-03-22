import React, {useState,useEffect} from "react"
import styled from 'styled-components';
import { Searchbar } from "./Searchbar";
import { Musicinfo } from "./Musicinfo";
import { CustomButtons } from "./CustomButtons";
import {Header} from './Header';
import {Sidebar} from './Sidebar';
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({
    clientId: "3e8375a239cf4b5b9b7d0c7cf7b577ce",
    clientSecret: '5e23120d2d4c40ec801d144792006d2f',
  })

export const Maininfo = ({logged}) =>  {
   
    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const [filteredData, setFilteredData] = useState({});

    useEffect(() =>{
        console.log(localStorage.getItem('access_token'));
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'))
            spotifyApi.setAccessToken(token)
            }
    },[token])

   
    console.log(` the token is getting passed ${token}`)
    const handlePlayList = () => {
        console.log("we are working")
            spotifyApi.getPlaylist("37i9dQZF1DX0pH2SQMRXnC")
            .then(playlist =>  {
                let tracks = playlist.body.tracks.items.map((item) => item.track);
                setData(tracks);  
                setFilteredData(tracks);
            })
    }

    const searchSongs = (event) => {
        let songName = event.target.value;
        setFilteredData(data.filter((track) => track.name.toLowerCase().startsWith(songName)));
    } 

    // https://open.spotify.com/playlist/37i9dQZF1DX0pH2SQMRXnC?si=cc3a2e0bfb024f0b
    
    


    return (
        <>
        <MainBox>
            <Header title={"Spotify Clone"} userLoggedIn={logged}/>
            <Searchbar searchSongs={searchSongs}/>
            <Sidebar />
            <Musicinfo playList={filteredData} />
            
           
                  <CustomButtons 
                    title={"Show Songs"} 
                    colorText={"lightblue"} 
                    posX={'57%'} 
                    posY={'80%'}
                    action={handlePlayList}
                />
                
            </MainBox>
        </>
    )
}

const MainBox = styled.div`
  position: absolute;
    width: 100%;
    height: 100%;

    /* top: 2%;
    left: 2%; */
    
   

    justify-content: center;
    /* background: #BD0DC0; */
;`
   

