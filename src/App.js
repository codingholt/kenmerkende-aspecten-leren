import './App.css';
import'terminal.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';
import UserInput from './components/UserInput';


const makeQuestion = async () =>{
  const randomNumber = Math.floor(Math.random() * (32 - 1) + 1)
  const question = await axios.get(`http://localhost:3000/questions/${randomNumber}`)
  return question.data
}

function App() {
  const [question, setQuestion] = useState('')


  useEffect(() => {

    makeQuestion().then((response) => setQuestion(response))

  }, [])
  console.log(question)

  return (
  <div className='container'>
    <Header/>
    {/* <h1>Leer de kenmermerkende aspecten.</h1> */}
    <Question question={question.question}/>
    <UserInput/>
    <Footer/>
  </div>
  );
}

export default App;
