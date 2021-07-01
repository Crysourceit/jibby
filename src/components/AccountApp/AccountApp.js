import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index";

function AccountApp() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log(depositMoney)

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>{account}</h1>
      <button onClick={() => dispatch({ type: 'deposit', payload: 100 })}>Manual dispatch</button>
      <button onClick={() => depositMoney(100)}>bindActionCreators</button>
      {/* <button onClick={() => withdrawMoney(200)}>desposite200</button> */}

      {/* <button onClick={depositeMoney(100)}>deposite</button>
      <button onClick={withdrawMoney(100)}>withdraw</button> */}
    </div>
  )
}



export default AccountApp

