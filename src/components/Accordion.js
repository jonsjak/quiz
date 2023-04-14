import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const Accordion = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const answers = useSelector((store) => store.quiz.answers);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    /* Checks the index of the clicked button against activeAccordion
    and alter it's class */
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={question.id}>
          <button
            type="button"
            className={activeAccordion === index ? 'active' : 'inactive'}
            onClick={() => handleAccordionClick(index)}>
            {question.questionText}
          </button>
          {activeAccordion === index && (
            <div className="answer">
              <p><span className="bold">User answer:</span> {answers[index].answer}</p>
              <p><span className="bold">Correct answer:</span> {question.options[question.correctAnswerIndex]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
