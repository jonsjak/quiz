import React from 'react';
import { useSelector } from 'react-redux';
import RestartBtn from './RestartBtn';

const Summary = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const answers = useSelector((store) => store.quiz.answers);
  const correctAnswers = answers.filter((item) => item.isCorrect)

  return (
    <div>
      {correctAnswers.length > 5 ? (<h1>Congratulations! You survived the Zombie apocalypse!</h1>)
        : (<h1>Oh no! You got infected! Better luck next time</h1>)}
      <p>{correctAnswers.length} right answer out of {answers.length}</p>
      {questions.map((question, index) => (
        <div className="summary-card" key={question.id}>
          <p>{question.questionText}</p>
          <p>User answer: {answers[index].answer}</p>
          <p>Correct answer: {question.options[question.correctAnswerIndex]}</p>
        </div>
      ))}
      <RestartBtn />
    </div>
  )
}

export default Summary;