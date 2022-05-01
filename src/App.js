import './App.css';
import'terminal.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';



const getQuestion = async () =>{
  const randomNumber = Math.floor(Math.random() * (32 - 1) + 1)
  const question = await axios.get(`https://ka-backend.herokuapp.com/questions/${randomNumber}`)
  return question.data
}



function App() {
  const [question, setQuestion] = useState('')
  const [input, setInput] = useState('')


  const checkAnswer = (input) => {
    if(input.toLowerCase() === question.answer.toLowerCase()){
      toast.success('Goed geantwoord 🎉', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setInput('')
      getQuestion().then((response) => setQuestion(response))
    }
    else{toast.error('Sorry, je hebt het fout, probeer het opnieuw', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
  setInput('')
}
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
    <Question question={question.question}/>
    
    <div className='input_wrapper'>
          
        <input value={input} type="text" placeholder='kenmerkend aspect' className='text_input block' onChange={ handleInput }>

        </input>

        <button type="submit" className='btn btn-primary btn-block' onClick={() => {checkAnswer(input)}}>Antwoord</button>
    
       
    </div>
   
     <ToastContainer />

    <Footer/>
  </div>
  );
}

export default App;
