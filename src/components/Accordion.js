import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledAccordion, StyledButton, AccordionH5, AnswersContainer } from './Style/GlobalStyle';

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
          <StyledButton
            accordian
            type="button"
            className={activeAccordion === index ? 'accordionActive' : 'accordionInactive'}
            onClick={() => handleAccordionClick(index)}>
            <AccordionH5 style={{ color: answers[index].answer === question.options[question.correctAnswerIndex] ? 'forestgreen' : 'orangered' }}>{question.questionText}
            </AccordionH5>
          </StyledButton>
          {activeAccordion === index && (
            <AnswersContainer>
              <p style={{ color: answers[index].answer === question.options[question.correctAnswerIndex] ? 'forestgreen' : 'orangered', margin: 0 }}>
                <span style={{ fontWeight: 'bold' }}>Your answer:
                </span> {answers[index].answer}
              </p>
              <p style={{ color: 'forestgreen', marginBottom: 0 }}>
                <span
                  style={{ fontWeight: 'bold' }}>Correct answer:
                </span> {question.options[question.correctAnswerIndex]}
              </p>
            </AnswersContainer>
          )}
        </div>
      ))}
    </StyledAccordion>
  );
};
