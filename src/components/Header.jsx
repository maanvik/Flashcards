import React from "react"

export default function Header(props){
    return (
        <div className="header">
             <h1>Traffic Rules Challenger</h1>
             <p>Are you not sure about your traffic rules knowledge? Test them here !</p>
             <p>{`Number of Cards: ${props.number}`}</p>
        </div>
    )
}