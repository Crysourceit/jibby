import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import "./CounterApp.css";
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'

function Counter() {

  function ShowCount() {
    const counter = useSelector((state) => state.value);
    return (
      <div>{counter}</div>
    )
  }

  const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      },
      customIncremented: (state, actions) => {
        state.value += actions.payload
      },
      test: (state, actions) => {
        console.log(actions)
        if (actions.type === 'counter/test') {
          state.value += 20
        }
      },
      resetValue: function (state) {
        state.value = 0
      }
    }
  })

  const { incremented, decremented, customIncremented, resetValue, test } = counterSlice.actions

  const store = configureStore({
    reducer: counterSlice.reducer
  })

  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  console.log(store)
  // Still pass action objects to `dispatch`, but they're created for us
  // store.dispatch(incremented())
  // // {value: 1}
  // store.dispatch(incremented())
  // // {value: 2}
  // store.dispatch(decremented())
  // // {value: 1}

  return (
    <Provider store={store}>
      <div className="counter-app">
        <div>
          <h1>Counter App (with Redux)</h1>
        </div>
        <div className="result">
          <ShowCount />
        </div>
        <div className="button">
          <button onClick={() => { store.dispatch(incremented()) }}>+</button>
          <button onClick={() => { store.dispatch(decremented()) }}>-</button>
          <button onClick={() => { store.dispatch(customIncremented(10)) }}>+10</button>
          <button onClick={() => { store.dispatch(test({ payload: 555, type: 'add20' })) }}>Action</button>
          <button onClick={() => { store.dispatch(resetValue()) }}>Reset</button>
        </div>
      </div>
    </Provider>
  )
}

export default Counter

