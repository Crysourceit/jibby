const emptyContactList = {
  firstName: "",
  lastName: "",
  telephone: "",
  postalCode: "",
  address: ""
}

const senderReducer = (state = {
  firstName: "",
  lastName: "",
  telephone: "",
  postalCode: "",
  address: ""
}, action) => {
  switch (action.type) {

    case "setFirstName":
      return { firstName: state.firstName = action.payload }

    case "reset":
      return {
        firstName: "",
        lastName: "",
        telephone: "",
        postalCode: "",
        address: ""
      }
    default:
      return state;
  }
};

export default senderReducer;
