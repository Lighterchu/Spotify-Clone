import React, {useState,useEffect} from "react"
import styled from 'styled-components';


export  const TrackList = ({name, trackHref}) => {
    // const allTracksHref = []
    // let allTrackIDs = {
    //     id:  ""
    // }
    // let spiltHref = ''
    // allTracksHref.push(trackHref)
    
    // allTracksHref.map((trackHref) => {
    //     spiltHref = trackHref.split("/")
    //     allTrackIDs = {
    //         id:  spiltHref[5]
    //     }
    // })

    // console.log(spiltHref)
    
    const [listTrack, setTrack] = useState({
        nameOftrack: name,
        href: trackHref,
        active: true
    })
    
    const addingSongs = () => {
        console.log("adding a song")
    }
    const removeSong = (e) => {
        console.log("Removing Song", e)
        console.log(name)
        setTrack({name: "", active: false})
        // console.log(e.target.closest(`[id=test]`).remove())
       
    }
    
    let displayProp;
    if(listTrack.active) {
        displayProp = "inline";
    } else {
        displayProp = "none";
    }
    console.log('inside tracklist');
    console.log(name)
  return (
      <div>
 <div style={{display: displayProp}}>
            <li>{name}</li>
            {/* <iframe className="border-radius:12px" src={`https://open.spotify.com/embed/track/${allTrackIDs.id}?utm_source=generator`} width="40%" height="80" frameBorder="0"></iframe> */}
            {/* <button onClick={addingSongs} >Add song</button>
            <button onClick={removeSong}>Remove song</button> */}
            

        </div>




          {/* {listTrack.active ? 
        <div style={{display: displayProp}}>
            <li>{listTrack.nameOftrack}</li>
            <iframe className="border-radius:12px" src={`https://open.spotify.com/embed/track/${allTrackIDs.id}?utm_source=generator`} width="40%" height="80" frameBorder="0"></iframe>
            <button onClick={addingSongs} >Add song</button>
            <button onClick={removeSong}>Remove song</button>
            

        </div> : "" */}
        
      </div>
   
   
   
  )
}

const displayStyle = styled.div`
  display: none;
;`