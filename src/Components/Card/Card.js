import {useState, useEffect}from "react"
import ReactCardFlip from "react-card-flip"
import "./styles.css"
import cover from "./cover.png"


export default function Card(props){

    const {src, name, number, matches, isPair, handleCards, activePair} = props
    const [isCardFlipped, setIsCardFlipped] = useState(false)


    useEffect(() => {
       
        setTimeout(() => {
            matches.includes(number) ? setIsCardFlipped(true) : setIsCardFlipped(false)
        }, 1000)
        
    }, [isPair])

    useEffect(()=>{
        if(activePair.length === 0){
            setIsCardFlipped(false)
        }
    },[activePair])

    function handleClick(){

        setIsCardFlipped(prevState=> !prevState)
        handleCards(name, number)
    }


    return(
        <div className="card" onClick={handleClick}>
            <ReactCardFlip isFlipped={isCardFlipped}>
                <img src={cover} alt="front of the card"className="card-img"/>
                <img src={src} alt="back of the card" className="card-img"/>
            </ReactCardFlip>
        </div>
    )
}