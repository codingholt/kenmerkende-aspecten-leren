import React from 'react'

const Question = ({question}) => {
  return (
    <div className='question-wrapper'>
        <h2 className='question'>{question}</h2>
    </div>
  )
}

export default Question