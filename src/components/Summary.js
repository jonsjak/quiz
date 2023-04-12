import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const answers = useSelector((store) => store.quiz.answers);

  return (
    <div>
      <h1>Summary:</h1>
      {questions.map((question, index) => (
        <div className="summary-card" key={question.id}>
          <p>{question.questionText}</p>
          <p>User answer: {answers[index].answerIndex}</p>
          <p>Correct answer: {question.options[question.correctAnswerIndex]}</p>
        </div>
      ))}
    </div>
  )
}

export default Summary;