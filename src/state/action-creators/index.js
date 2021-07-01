
export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount
    })
  }
}

// WITHOUT THUNK
// export const depositMoney = (amount) => {
//   return {
//     type: "deposit",
//     payload: amount
//   }
// }

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "widthdraw",
      payload: amount
    })
  }
}