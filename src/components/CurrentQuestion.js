import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Starter } from 'components/Starter';
import Summary from './Summary'
import Progressbar from './Progressbar'
import RestartBtn from './RestartBtn'
import { StyledButton } from './Style/Button';
import { OptionContainer } from './Style/Container';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  const isQuizOver = useSelector((store) => store.quiz.quizOver)
  const quizStarted = useSelector((store) => store.quiz.quizStarted)
  const [answerColor, setAnswerColor] = useState('pink');
  const [showSelectedColor, setShowSelectedColor] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [disabled, setDisabled] = useState(false);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOptionClick = (option, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedIndex(index);
    console.log('index', index);
    setDisabled(true)

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
      setAnswerColor('#D1E64B')
      setDisabled(false)
    }, 1000)
  }

  const handleMouseEnter = (e) => {
    e.target.style.background = '#F36B2B'
  }
  const handleMouseLeave = (e) => {
    e.target.style.background = '#D1E64B'
  }

  return (
    <>
      {!quizStarted && <Starter />}
      {!isQuizOver && quizStarted && (
        <div key={question.id}>
          <h1>Question: {question.questionText}</h1>
          <OptionContainer>
            {question.options.map((option, index) => (
              <div key={option.id}>
                <StyledButton
                  optionbutton
                  disabled={disabled}
                  style={{ backgroundColor: (showSelectedColor && index === selectedIndex) ? answerColor : '#D1E64B' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  type="button"
                  // eslint-disable-next-line max-len
                  onClick={() => handleOptionClick(option, question.options.indexOf(option, index))}>
                  {option}
                </StyledButton>
              </div>
            ))}
          </OptionContainer>
          <p>Correct answer: {question.correctAnswerIndex} </p>
          <Progressbar />
          <RestartBtn />
        </div>)}

      {isQuizOver && (<Summary />)}
    </>
  )
}
