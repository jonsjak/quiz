import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Summary from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  const isQuizOver = useSelector((store) => store.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOptionClick = (option, index) => {
    console.log(`You clicked on option ${option} with index: ${index}`)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    dispatch(quiz.actions.goToNextQuestion())
  }

  const handleRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <>
      {/* Can we make a new component from this? */}
      {!isQuizOver && (
        <div key={question.id}>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((option) => (
            <div key={option.id}>
              <button type="button" onClick={() => handleOptionClick(option, question.options.indexOf(option))}>{option}</button>
            </div>
          ))}
          <p>Correct answer: {question.correctAnswerIndex} </p>
          <button type="button" onClick={handleRestartClick}>Restart</button>
        </div>)}

      {isQuizOver && (<Summary />)}
    </>
  )
}
