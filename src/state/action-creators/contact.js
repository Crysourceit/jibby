export const setContact = (event, name) => {
  return {
    type: "set",
    payload: {
      id: event.target.id,
      value: event.target.value
    },
    name: name
  }
}

export const resetContact = (name) => {
  return {
    type: "reset",
    payload: {},
    name: name
  }
}
