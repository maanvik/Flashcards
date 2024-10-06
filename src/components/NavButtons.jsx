import React from "react"
import '../App.css'


export default function NavButtons(props){

    return(
        <div className="button-container">
            <button onClick={props.prev}>←</button>
            <button onClick={props.next}>⭢</button>
            <button onClick={props.randomize}>Randomize</button>
      </div>
    )
}