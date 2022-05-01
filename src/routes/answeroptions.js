import React from 'react'
import '../App.css';
import axios from 'axios';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import'terminal.css'

const getAnswerOptions = async() =>{
    const answeroptions = await axios.get('https://ka-backend.herokuapp.com/Answers')
    return answeroptions
}


const Answeroptions = () => {
    const [answeroptions, setAnsweroptions] = useState([])

    useEffect(() => {
        getAnswerOptions().then((res) => setAnsweroptions(res.data))
    },[])

  return (
    <div className='container'>
        <Header/>
            <ul>
                
                    {
                    answeroptions.map(answeroption => {
                        return <li>{answeroption}</li>
                    })
                    }

            </ul>
        <Footer/>
    </div>
  )
}

export default Answeroptions