import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { StyledButton } from './Style/GlobalStyle';

export const AnswerOptions = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  const [answerColor, setAnswerColor] = useState('pink');
  const [showSelectedColor, setShowSelectedColor] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [disabled, setDisabled] = useState(false);
  const [showCorrectColor, setShowCorrectColor] = useState();
  const [correctIndex, setCorrectIndex] = useState();
  const [correctColor, setCorrectColor] = useState();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOptionClick = (option, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setSelectedIndex(index);
    setCorrectIndex(question.correctAnswerIndex);
    setDisabled(true)

    setShowSelectedColor(true);
    if (index === question.correctAnswerIndex) {
      setAnswerColor('green');
      setShowCorrectColor(false);
      setCorrectColor('green');
    } else {
      setAnswerColor('red');
      setShowCorrectColor(true);
      setCorrectColor('green');
    }

    setTimeout(() => {
      setSelectedIndex(100)
      dispatch(quiz.actions.goToNextQuestion())
      setShowSelectedColor(false);
      setAnswerColor('#D1E64B')
      setShowCorrectColor(false);
      setCorrectColor('');
      setDisabled(false)
    }, 1000)
  }

  const handleMouseEnter = (e) => {
    e.target.style.background = '#F36B2B'
  }

  const handleMouseLeave = (e) => {
    e.target.style.background = '#D1E64B';
  }

  const getOptionColor = (index) => {
    if (showSelectedColor && index === selectedIndex) {
      return answerColor;
    } else if (showCorrectColor && index === correctIndex) {
      return correctColor;
    } else {
      return '#D1E64B';
    }
  };

  return (
    <>
      {question.options.map((option, index) => (
        <div key={option.id}>
          <StyledButton
            optionbutton
            disabled={disabled}
            style={{
              backgroundColor: getOptionColor(index)
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="button"
            // eslint-disable-next-line max-len
            onClick={() => handleOptionClick(option, index)}>
            {option}
          </StyledButton>
        </div>
      ))}
    </>
  )
}