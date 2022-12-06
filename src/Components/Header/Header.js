import React from "react"
import "./styles.css"

export default function Header(props){

    const {handleClick} = props

    return(
        <div className="header-container">
            <h1 className="header-title">Memory Game</h1>
            <button 
                className="header-button"
                onClick={handleClick}>
                Restart game
            </button>
        </div>
    )
}