import React, {useState,useEffect} from "react"



export  const TrackList = ({name, trackHref}) => {
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
        
       
    }
    
    let displayProp;
    if(listTrack.active) {
        displayProp = "inline";
    } else {
        displayProp = "none";
    }
    
  return (
      <div>
            <div style={{display: displayProp}}>
                <li>{name}</li>
                <iframe className="border-radius:12px" src={`https://open.spotify.com/embed/track/${trackHref}?utm_source=generator`} width="40%" height="80" frameBorder="0"></iframe>
                <button onClick={addingSongs} >Add song</button> 
                <button onClick={removeSong}>Remove song</button> 
            </div>
      </div>
   
   
   
  )
}

