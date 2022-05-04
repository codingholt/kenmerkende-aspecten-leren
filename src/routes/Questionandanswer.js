import React from 'react'
import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import'terminal.css'

const getQuestion = async() =>{
    const question = await axios.get('https://ka-backend.herokuapp.com/questions')
    return question.data
}


const Questionandanswer = () => {
    const [question, setQuestion] = useState([])



    useEffect(() => {
        getQuestion().then((res) => setQuestion(res))
    },[])

  return (
    <div className='container'>
        <Header/>
            <ul>
                
                    {
                    question.map(q => {
                        return <p><li>{q.question} <ul><li>{q.answer}</li></ul></li></p>

                    })
                    
                    }

            </ul>
        {/* <Footer className='ftr'/> */}
    
    </div>
  )
}

export default Questionandanswer