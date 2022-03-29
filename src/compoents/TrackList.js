import React, {useState,useEffect} from "react"



export  const TrackList = ({name, trackHref}) => {
    const [listTrack, setTrack] = useState({
       active: true
    })
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
                <p>hit play to get preview of track</p>
            </div>
      </div>
  )
}

