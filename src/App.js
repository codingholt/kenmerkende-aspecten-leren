import './App.css';
import'terminal.css'
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';
import UserInput from './components/UserInput';


const makeQuestion = () =>{

}

function App() {
  // const [question, setQuestion] = useState('')


  // useEffect(() => {

  //   makeQuestion().then((response) => setQuestion(response))

  // }, [])

  return (
  <div className='container'>
    <Header/>
    {/* <h1>Leer de kenmermerkende aspecten.</h1> */}
    <Question question='God staat niet meer centraal, en er wordt gedacht met een rede, kunstenaars focustusten zich minder op god maar meer op de mens en natuur. Welk kenmerkend aspect past hierbij?'/>
    <UserInput/>
    <Footer/>
  </div>
  );
}

export default App;
