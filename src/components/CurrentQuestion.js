import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Starter } from 'components/Starter';
import Summary from './Summary'
import Progressbar from './Progressbar'
import RestartBtn from './RestartBtn'
import { OptionContainer, BackgroundStarter, StyledButton, InnerContainer } from './Style/GlobalStyle';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  const isQuizOver = useSelector((store) => store.quiz.quizOver)
  const quizStarted = useSelector((store) => store.quiz.quizStarted)
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
  const getButtonColor = (index) => {
    if (showSelectedColor && index === selectedIndex) {
      return answerColor;
    } else if (showCorrectColor && index === correctIndex) {
      return correctColor;
    } else {
      return '#D1E64B';
    }
  };
  return (
    <BackgroundStarter>
      {!quizStarted && <Starter />}
      {!isQuizOver && quizStarted && (
        <InnerContainer key={question.id}>
          <h1>{question.questionText}</h1>
          <OptionContainer>
            {question.options.map((option, index) => (
              <div key={option.id}>
                <StyledButton
                  optionbutton
                  disabled={disabled}
                  style={{
                    backgroundColor: getButtonColor(index)
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
          </OptionContainer>
          <Progressbar />
          <RestartBtn />
        </InnerContainer>)}
      {isQuizOver && (
        <Summary />)}
    </BackgroundStarter>
  )
}