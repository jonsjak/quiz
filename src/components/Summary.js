import React from 'react';
import { useSelector } from 'react-redux';
import RestartBtn from './RestartBtn';
import { InnerContainer } from './Style/GlobalStyle';
import { Accordion } from './Accordion';

const Summary = () => {
  const answers = useSelector((store) => store.quiz.answers);
  const correctAnswers = answers.filter((item) => item.isCorrect)

  return (
    <InnerContainer>
      {correctAnswers.length > 5 ? (<h1>Congratulations! You survived the Zombie apocalypse!</h1>)
        : (<h1>Oh no! You got infected! Better luck next time</h1>)}
      <p>Your score is {correctAnswers.length}/{answers.length}</p>
      <RestartBtn />
      <Accordion />
    </InnerContainer>
  )
}

export default Summary;