import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 30vw;
  height: 10px;
  border-radius: 50px; 
  position: relative;
  overflow: hidden;
  display: flex;
  margin-top: 5px; 
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid black;

  }
`;

const ProgressStatus = styled.div`
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    var(--yellow) 0%,
    var(--orange) 100%
  );
  transition: width 1s ease-in-out;
  height: 100%;
  position: absolute;
  top: 0;
`;
const Amount = styled.label`
  color: black; 
  text-align: center;
  font-size: 1.25vw;
  font-weight: bold;
  line-height: 2vw;
  white-space: wrap;
  letter-spacing: 0.1vw;

`

const Wrapper = styled.div`
display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;
padding: 3em;
padding-bottom: 2em;  
`

const ProgressBar = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const amountOfQuestions = useSelector((state) => state.quiz.questions.length);
  const percentCompleted = `${useSelector(
    (store) => (store.quiz.currentQuestionIndex * 100) / store.quiz.questions.length
  )}%`;
  return (
    <Wrapper>
      <Amount> THIS IS QUESTION NO &nbsp;
        {question.id} / {amountOfQuestions}
      </Amount>
      <ProgressContainer>

        <ProgressStatus width={percentCompleted} />
      </ProgressContainer>
    </Wrapper>
  )
}
export default ProgressBar;