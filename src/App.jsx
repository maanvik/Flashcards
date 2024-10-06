import React from 'react'
import data from './data'
import Header from './components/Header'
import FlashCard from './components/FlashCard'
import AnswerForm from './components/AnswerForm'
import NavButtons from './components/NavButtons'
import './App.css'
import './flashCard.css'


function App() {
  const [card, setCard] = React.useState({text:"Start!", image:"", info:""});
  const [isStart, setIsStart] = React.useState(true);
  const [index, setIndex] = React.useState(-1);
  const [isFlip, setIsFlip] = React.useState(false);
  const [feedBack, setFeedBack] = React.useState(null);
  const [shuffledData, setShuffledData] = React.useState(data);
  const len = shuffledData.length;

  function toggle(){
    if (isStart){
      setCard(prevCard => ({
        text: prevCard.text === "Start!" ? "Press the Next button to Start FlashCards" : "Start!",
        image: "" // Reset image
      }));
    }
    else {
      setIsFlip(true)
      setCard(prevCard => ({
        text: prevCard.text === shuffledData[index].question ? shuffledData[index].answer : shuffledData[index].question,
        image: prevCard.text === shuffledData[index].question ? "" : shuffledData[index].image 
      }));
    }
  
  }
  
  function handleChange(event){
    event.preventDefault()
    const {name,value} = event.target
    setCard(prevCard => {
      return {
        ...prevCard ,
        [name]:value
      }
    })

  }
  function prev(){
    setIsFlip(false)
    if (index > -1){
      let ind = index
      ind = ind -1
      setIndex(ind)
      setCard({
        text: shuffledData[ind].question,
        image: shuffledData[ind].image || "" ,
        info:""
      });
    }

  }


  function next(){
    setIsStart(false)
    setIsFlip(false)
    let ind = index
    ind = (ind + 1)%len
    setIndex(ind)

    setCard({
      text: shuffledData[ind].question,
      image: shuffledData[ind].image || "" ,
      info:""
    });
  }

  function check(event){
    // event.preventDefault();
    const isCorrect = card.info.toLowerCase() === shuffledData[index].answer.toLowerCase() ;
    setFeedBack(isCorrect ? "correct":"incorrect")
    setTimeout(() => setFeedBack(null), 2000);
      
  }

  function randomize(){
    let newShuffledCards = [...shuffledData]
    for (let i = newShuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledCards[i], newShuffledCards[j]] = [newShuffledCards[j], newShuffledCards[i]];
    }
    
    setShuffledData(newShuffledCards)
    setIndex(0)
    setCard({
      text: newShuffledCards[0].question,
      image: newShuffledCards[0].image || "" ,
      info:"" 
    });

    setIsStart(false);
    setIsFlip(false);
    setFeedBack(null);
  }

  return (
    <div>
      <Header number={len}/>
      <FlashCard 
        tog={toggle} 
        info={card.text} 
        image={card.image}
      />
      <AnswerForm 
        handleSubmit={check}
        handleChange={handleChange}
        cardInfo={card.info}
        isFlip={isFlip}
        feedBack={feedBack}  
      />
      <NavButtons 
        prev={prev}
        next={next}
        randomize={randomize}
      />
    </div>
    
  )
}

export default App
