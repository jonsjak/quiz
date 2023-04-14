import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledAccordion } from './Style/GlobalStyle';

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
    <StyledAccordion>
      {questions.map((question, index) => (
        <div key={question.id}>
          <button
            type="button"
            className={activeAccordion === index ? 'accordionActive' : 'accordionInactive'}
            onClick={() => handleAccordionClick(index)}>
            <h5>{question.questionText}</h5>
          </button>
          {activeAccordion === index && (
            <div className="answer">
              <p>
                <span style={{ fontWeight: 'bold' }}>User answer:
                </span> {answers[index].answer}
              </p>
              <p>
                <span
                  style={{ fontWeight: 'bold' }}>Correct answer:
                </span> {question.options[question.correctAnswerIndex]}
              </p>
            </div>
          )}
        </div>
      ))}
    </StyledAccordion>
  );
};
