import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Summary from './Summary'
import Progressbar from './Progressbar'
import RestartBtn from './RestartBtn'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  const isQuizOver = useSelector((store) => store.quiz.quizOver)
  const [answerColor, setAnswerColor] = useState('pink');
  const [showSelectedColor, setShowSelectedColor] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOptionClick = (option, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedIndex(index);
    console.log('index', index);

    setShowSelectedColor(true);
    if (index === question.correctAnswerIndex) {
      setAnswerColor('green');
    } else {
      setAnswerColor('red');
    }

    setTimeout(() => {
      setSelectedIndex(100)
      dispatch(quiz.actions.goToNextQuestion())
      setShowSelectedColor(false);
      setAnswerColor('transparent')
    }, 2000)
  }

  return (
    <>
      {/* Can we make a new component from this? */}
      {!isQuizOver && (
        <div key={question.id}>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((option, index) => (
            <div key={option.id}>
              <button
                style={{ backgroundColor: (showSelectedColor && index === selectedIndex) ? answerColor : 'transparent' }}
                type="button"
                onClick={() => handleOptionClick(option, question.options.indexOf(option, index))}>
                {option}
              </button>
            </div>
          ))}
          <p>Correct answer: {question.correctAnswerIndex} </p>
          <Progressbar />
          <RestartBtn />
        </div>)}

      {isQuizOver && (<Summary />)}
    </>
  )
}
