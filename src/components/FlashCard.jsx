import React from "react";
import "../flashCard.css";

export default function FlashCard(props) {
    const [flip, setFlip] = React.useState(false);

    const handleClick = () => {
        setFlip(prev => !prev);
        props.tog(); 
    };

    return (
        <div className={`card-container`} onClick={handleClick}>
            <div className={`card ${flip ? "flipped" : ""}`}>
                <div className="card-face front">
                    <p>{props.info}</p>
                    {props.image && <img src={props.image} alt="Flashcard visual" />}
                </div>
                <div className="card-face back">
                    <p>{props.info}</p>
                    {props.image && <img src={props.image} alt="Flashcard visual" />}
                </div>
            </div>
        </div>
    );
}