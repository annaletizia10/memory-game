import {useState} from "react"
import Card from "./Components/Card/Card"
import Header from "./Components/Header/Header"
import './App.css'
import images from "./imagesArray.js"
import {shuffle} from 'lodash'
import Winner from "./Components/Winner/Winner"

function App() {

  const [cards, setCards] = useState(shuffle([...images]))
  const [activePair, setActivePair] = useState([])
  const [matches, setMatches] = useState([])
  const [isPair, setIsPair] = useState(false)


  function handleCards(name, number){

    const card = {name, number}
    const foundMatch = matches.filter(element => element === card.number)

    if(foundMatch.length === 0 && activePair.length === 0 ){
      setActivePair([card])
    }
    if(foundMatch.length === 0 && activePair.length === 1){
      setActivePair([...activePair, card])

      const firstCard = activePair[0]
      const secondCard = card
    
      if(firstCard.name === secondCard.name && firstCard.number !== secondCard.number){
        setMatches([...matches, firstCard.number, secondCard.number])
      }
      setIsPair(prevState => !prevState)
    }
    if(foundMatch.length === 0 && activePair.length === 2){
      setActivePair([card])
    }

  }

  function handleButtonClick(){
    console.log("clicked")
    setActivePair([])
    setMatches([])
    setIsPair(false)
    setCards(shuffle([...images]))
  }


  console.log({matches: matches, activePair: activePair})
  return (
    <div>
      {matches.length === cards.length ? <Winner handleClick={handleButtonClick}/>
      :
      <div className="container">
      <Header handleClick={handleButtonClick}/>
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
              activePair={activePair}
              isPair={isPair}
            />
          )
          })}
          </div>
      </div>}
    </div>
  );
}

export default App;
