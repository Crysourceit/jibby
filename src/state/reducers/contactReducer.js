// PROPS
//
// onChange={(e)=> handleChange(e)}
//
// function handleChange(event) {
//   const { id, value } = event.target
//   setContactAddress(prev => {
//     return {
//       ...prev, [id]: value
//     }
//   });
// }

// REDUX
//
// onChange={(e)=> handleChange(e)}
// function handleChange(event) {
//   const { id, value } = event.target
//
//   แบบเต็มๆ
//   setContact({payload: {id: id, value: value }, type: "setContact"})
//   แบบย่อ ๆ 
//   setContact(event)
//   ค่อยไป .target.id/value ใน action
// }

const contactReducer = (state = {
  firstName: "",
  lastName: "",
  telephone: "",
  postalCode: "",
  address: ""
}, action) => {
  switch (action.type) {

    case "set":
      return {
        ...state, [action.payload.id]: action.payload.value
      }

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

export default contactReducer;
