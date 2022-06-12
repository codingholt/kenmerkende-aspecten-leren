import './App.css';
import'terminal.css'

import { ToastContainer, toast } from 'react-toastify';
import {qa} from './db.js'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Question from './components/Question';
import Fuse from 'fuse.js';



const getQuestion = async () =>{
  const randomNumber = Math.floor(Math.random() * qa.length)
  const question = qa[randomNumber]

  return question

}




function App() {
  const [question, setQuestion] = useState('')
  const [input, setInput] = useState('')
  const [showsuggestion, setShowSuggestion] =  useState(false)
  const [suggestion, setSuggestion] =  useState('')

  useEffect(()=>{

    const getSet = async () =>{
    setQuestion( await getQuestion());
    }


    getSet()
      .catch((err)=>(console.error(err)))
  },[])

const getSuggestion = async (input) => {

  const data = qa

  const options = {
    includeScore: true,
    threshold: 0.8,
    keys: ['answer']

  }

  const fuse = new Fuse(data, options)
 
  const search = await fuse.search(input)

  if(search[0]['score'] < 0.37){
    setShowSuggestion(true)
    setSuggestion(search[0]['item']['answer'])
  }else{
    setShowSuggestion(false)
    return;
  }
}


  const checkAnswer = async (input) => {
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
      setShowSuggestion(false)
      setSuggestion('')
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
  await getSuggestion(input)

  setInput('')
}
}


  const handleInput = (e) =>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
  <div className='container'>
    <div className='content-wrap'>
    <Header/>
    <Question question={question.question}/>
    
    <div className='input_wrapper'>
          
        <input value={input} type="text" placeholder='kenmerkend aspect' className='text_input block' onChange={ handleInput }>

        </input>
        {showsuggestion ? <div class="terminal-alert"> <div className='lightBulb'>💡</div>Bedoelde je: '<cite>{suggestion}</cite>'</div> : '' }

        <button type="submit" className='btn btn-primary btn-block' onClick={() => {checkAnswer(input)}}>Antwoord</button>
    
       
    </div>
   
     <ToastContainer />

    </div>
    {/* <Footer className='ftr'/> */}
  </div>
  );
}

export default App;
