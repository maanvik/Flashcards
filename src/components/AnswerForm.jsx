import React from "react"
import '../App.css'


export default function AnswerForm(props){
    const onSubmit = (event) => {
        event.preventDefault(); 
        props.handleSubmit(event);
      };

    return(
        <form onSubmit={onSubmit} className="feedback">
            <label>Enter your Guess here</label>
            <input 
            placeholder="Input Goes Here"
            name="info" 
            onChange={props.handleChange}
            value={props.cardInfo}
            autocomplete="off"
            disabled={props.isFlip}
            className={props.feedBack ? `input-${props.feedBack}` : ''}
            />
            <button type="submit" disabled={props.isFlip}>Check</button>
      </form>
    )
}