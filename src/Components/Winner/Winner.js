import React from "react"
import "./styles.css"

export default function Winner(props){

    const {handleClick} = props 
    return(
        <div className="winner-container">
            <h1 className="winner-title">YOU WIN!</h1>
            <button className="winner-button" onClick={handleClick}>Play Again</button>
        </div>
    )
}