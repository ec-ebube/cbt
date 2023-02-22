import React from 'react'
import { Link } from 'react-router-dom'

function Instructions() {
  return (
    <div className='instructions'>
      <h2>Read the following instructions carefuly</h2>
      <li>Read the questions carefuly before answering the questions</li>
      <li>Click the "Previous" or the red button button to go back to the last question</li>
      <li>Click the "Next" or the green button button to go to the next question</li>
      <li>Do not refreash your page while writing the exam</li>
      <li>Be quick enough not to be told to leave the hall without being through with your exam</li>
      <li>Click the submit button when you're done with the exam</li>
    <div className='click1'><Link to='/quiz' className='start'>
        Start Quiz NOW
    </Link></div>
    </div>
  )
}

export default Instructions
