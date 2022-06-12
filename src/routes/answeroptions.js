import React from 'react'
import '../App.css';
import { answers } from '../db';
import Header from '../components/Header';
import'terminal.css'




const Answeroptions = () => {
   
  return (
    <div className='container'>
        <Header/>
            <ul>
                    {
                    answers.map(answeroption => {
                        return <li>{answeroption}</li>
                    })
                    }

            </ul>
        {/* <Footer className='ftr'/> */}
    
    </div>
  )
}

export default Answeroptions