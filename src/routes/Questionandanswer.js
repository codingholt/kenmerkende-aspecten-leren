import React from 'react'
import '../App.css';
import { qa } from '../db.js';
import Header from '../components/Header';
import'terminal.css'



function Questionandanswer(){

  return (
    <div className='container'>
        <Header/>
            <ul>
                
                    {
                    qa.map(q => {
                        return <li><p>{q.question} <ul><li>{q.answer}</li></ul></p></li>

                    })
                    
                    }

            </ul>
        {/* <Footer className='ftr'/> */}
    
    </div>
  )
}

export default Questionandanswer