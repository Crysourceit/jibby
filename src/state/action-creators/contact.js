export const setContact = (event) => {
  return {
    type: "set",
    payload: {
      id: event.target.id,
      value: event.target.value
    }
  }
}

export const resetContact = () => {
  return {
    type: "reset",
    payload: {}
  }
}
