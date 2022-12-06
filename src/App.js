import {useState, useEffect} from "react"
import Card from "./Components/Card"
import './App.css'
import images from "./imagesArray.js"
import {shuffle} from 'lodash'

function App() {

  const [cards, setCards] = useState(shuffle([...images]))
  const [activePair, setActivePair] = useState([])
  const [matches, setMatches] = useState([])
  const [isActive, setIsPair] = useState(false)


  function handleCards(name, number){
    const card = {name, number}
    const found = matches.filter(element => element === card.number)
    if(found.length === 0 && activePair.length === 0 ){
      setActivePair([card])
    }
    if(found.length === 0 && activePair.length === 1){
      setActivePair([...activePair, card])

      const firstCard = activePair[0]
      const secondCard = card
    
        if(firstCard.name === secondCard.name){
          setMatches([...matches, firstCard.number, secondCard.number])
        }
        setIsPair(prevState => !prevState)
    }
    if(found.length === 0 && activePair.length === 2){
      setActivePair([card])
    }

  }

  if(matches.length === cards.length){
    alert("you won!!")
  }

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div className="board-box">
        {cards.map((card, index) => {
          return (
            <Card 
              name={card.name}
              number={card.number}
              src={card.src}
              key={index}  
              handleCards={handleCards}
              matches={matches}
              isPair={isActive}
            />
          )
          })}
      </div>
    </div>
  );
}

export default App;
