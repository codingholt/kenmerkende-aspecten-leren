import './App.css';
import'terminal.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
// import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';
import Fuse from 'fuse.js';



const getQuestion = async () =>{
  const randomNumber = Math.floor(Math.random() * (32 - 1) + 1)
  const question = await axios.get(`https://ka-backend.herokuapp.com/questions/${randomNumber}`)

  return question.data

}




function App() {
  const [question, setQuestion] = useState('')
  const [input, setInput] = useState('')
  const [showsuggestion, setShowSuggestion] =  useState(false)
  const [suggestion, setSuggestion] =  useState('')


const getSuggestion = async (input) => {
  const list = await axios.get('https://ka-backend.herokuapp.com/questions/');
  const data = list.data

  const options = {
    includeScore: true,
    threshold: 0.8,
    keys: ['answer']

    // 
  }

  const fuse = new Fuse(data, options)
  console.log(input)
  const search = await fuse.search(input)
  console.log(search)
  if(search[0]['score'] < 0.22){
    setShowSuggestion(true)
    setSuggestion(search[0]['item']['answer'])
  }else{
    setShowSuggestion(false)
    console.log('answer false, not a matching suggestion found')
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


  useEffect(() => {

    getQuestion().then((response) => setQuestion(response))

  }, [])

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

        <button type="submit" className='btn btn-primary btn-block' onClick={() => {checkAnswer(input)}}>Antwoord</button>
    
       
    </div>
   
     <ToastContainer />
    {showsuggestion ? <div class="terminal-alert">Bedoelde je: {suggestion}</div> : '' }

    </div>
    {/* <Footer className='ftr'/> */}
  </div>
  );
}

export default App;
