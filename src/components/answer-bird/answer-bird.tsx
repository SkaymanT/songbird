import React from 'react';
import OptionAnswers from './option-answers';
import DetailsOption from './details-option';

function AnswerBird(): JSX.Element {
  return (
    <div className="answer-bird">
      <OptionAnswers />
      <DetailsOption />
      <button className="btn">Next Level</button>
    </div>
  );
}

export default AnswerBird;
