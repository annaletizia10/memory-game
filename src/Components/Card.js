import {useState, useEffect}from "react"
import ReactCardFlip from "react-card-flip"
import "./styles.css"
import cover from "../images/cover.png"


export default function Card(props){

    const {src, name, number, matches, isPair, handleCards} = props
    const [isCardFlipped, setIsCardFlipped] = useState(false)


    useEffect(() => {
       
        setTimeout(() => {
            matches.includes(number) ? setIsCardFlipped(true) : setIsCardFlipped(false)
        }, 1000)
        
    }, [isPair])

    function handleClick(){

        setIsCardFlipped(prevState=> !prevState)
        handleCards(name, number)
    }


    return(
        <div className="card" onClick={handleClick}>
            <ReactCardFlip isFlipped={isCardFlipped}>
                <img src={cover} className="card-img"/>
                <img src={src} className="card-img"/>
            </ReactCardFlip>
        </div>
    )
}