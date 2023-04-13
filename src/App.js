import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';
import { CurrentQuestion } from 'components/CurrentQuestion';
import { Starter } from 'components/Starter';

/* combineReducers lets us add many reducers to the state */
const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [starter, setStarter] = useState(true)
  return (
    <Provider store={store}>
      {starter && (<Starter setStarter={setStarter} />)}
      {!starter && (<CurrentQuestion />)}
    </Provider>
  );
}
