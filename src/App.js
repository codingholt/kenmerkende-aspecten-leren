import './App.css';
import'terminal.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';



const getQuestion = async () =>{
  const randomNumber = Math.floor(Math.random() * (32 - 1) + 1)
  const question = await axios.get(`https://ka-backend.herokuapp.com/questions/${randomNumber}`)
  return question.data
}

const FalseAnswer = () =>
  <div className="terminal-alert terminal-alert-error">Sorry, je antwoord is fout</div>;

const CorrectAnswer = () =>
  <div className="terminal-alert terminal-alert-error">Goed Antwoord!</div>;


function App() {
  const [question, setQuestion] = useState('')
  const [input, setInput] = useState('')
  const [showErr, setShowErr] = useState()

  const checkAnswer = (input) => {
    if(input === question.answer){
      setShowErr(false)
      getQuestion().then((response) => setQuestion(response))
    }
    setShowErr(true)

  }


  useEffect(() => {

    getQuestion().then((response) => setQuestion(response))

  }, [])

  const handleInput = (e) =>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
  <div className='container'>
    <Header/>
    {/* <h1>Leer de kenmermerkende aspecten.</h1> */}
    <Question question={question.question}/>
    <div className='input_wrapper'>
          
        <input value={input} type="text" placeholder='kenmerkend aspect' className='text_input block' onChange={ handleInput }>

        </input>

        <button type="submit" className='btn btn-primary btn-block' onClick={() => {checkAnswer(input)}}>Submit answer</button>
    
       
    </div>
     {showErr ? <FalseAnswer/> : console.log('👍')}
    <Footer/>
  </div>
  );
}

export default App;
