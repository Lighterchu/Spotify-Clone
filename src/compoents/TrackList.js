import React, {useState,useEffect} from "react"


export  const TrackList = ({name}) => {

    const [listTrack, setTrack] = useState({
        nameOftrack: name,
        active: true
    })
    let showTrack = true

    const addingSongs = () => {
        console.log("adding a song")
    }
    const removeSong = (e) => {
        console.log("Removing Song", e)
        console.log(name)
        setTrack({name: "", active: false})
        // console.log(e.target.closest(`[id=test]`).remove())
       
    }
  
  return (
      <div>
          {listTrack.active ? 
        <div>
            <li>{listTrack.nameOftrack}</li>
            <button onClick={addingSongs} >Add song</button>
            <button onClick={removeSong}>Remove song</button>

        </div> : ""
        }
      </div>
   
   
   
  )
}

