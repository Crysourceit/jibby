/////////////////////////////// จะถูกใช้ในหน้า App ประมาณนี้
// export * as accountActions from "./action-creators/account"


//import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { accountActions } from "../../state/_Actions";

// function AccountApp() {

//   const account = useSelector((state) => state.account)
//   const dispatch = useDispatch();

//   const { depositMoney, withdrawMoney } = bindActionCreators(accountActions, dispatch);

//   console.log(depositMoney)

//   return (
//     <div style={{ textAlign: 'center', marginTop: '10%' }}>
//       <h1>{account}</h1>
//       <button onClick={() => dispatch({ type: 'deposit', payload: 100 })}>Manual dispatch</button>
//       <button onClick={() => depositMoney(100)}>bindActionCreators</button>
//       {/* <button onClick={() => withdrawMoney(200)}>desposite200</button> */}

//       {/* <button onClick={depositeMoney(100)}>deposite</button>
//       <button onClick={withdrawMoney(100)}>withdraw</button> */}
//     </div>
//   )
// }
/////////////////////////////// จะถูกใช้ในหน้า App ประมาณนี้

// for account app
export * as accountActions from "./action-creators/account"

// for contact app
export * as contactActions from "./action-creators/contact"


