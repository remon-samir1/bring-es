import React from 'react';
import Question from './Question';
import './AskQuestions.css'
const AskQuestions = () => {
  return (
    <div className='container questions mt-5 mt-md-0'>
      <div className="header text-center">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className='d-flex gap-4 flex-wrap justify-content-center mt-5 w-100'>

      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      </div>
    </div>
  );
}

export default AskQuestions;
