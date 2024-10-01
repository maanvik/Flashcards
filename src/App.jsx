import React from 'react'
import data from './data'
import Header from './components/Header'
import FlashCard from './components/FlashCard'
import './App.css'
import './flashCard.css'

function App() {
  const [card, setCard] = React.useState({text:"Start!", image:""})
  const [isStart, setIsStart] = React.useState(true);
  const [num,setNum] = React.useState()
  const len = data.length

  

  
  function toggle(){
    if (isStart){
      setCard(prevCard => ({
        text: prevCard.text === "Start!" ? "Press the Next button to Start FlashCards" : "Start!",
        image: "" // Reset image
      }));
    }
    else {
      setCard(prevCard => ({
        text: prevCard.text === data[num].question ? data[num].answer : data[num].question,
        image: prevCard.text === data[num].question ? "" : data[num].image 
      }));
    }
  
  }

  function next(){
    setIsStart(false)
    const randNum = Math.floor(Math.random()*len)
    setNum(randNum)

    setCard({
      text: data[randNum].question,
      image: data[randNum].image || "" 
    });



  }

  return (
    <div>
      <Header number={len}/>
      <FlashCard 
        tog={toggle} 
        info={card.text} 
        image={card.image}
      />
      <div className="button-container">
        <button onClick={next}>⭢</button>
      </div>
    </div>
    
  )
}

export default App
