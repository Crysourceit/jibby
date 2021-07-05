import faker from 'faker';
import axios from 'axios';
faker.locale = "it";

const dummyReports = [
  // {
  //   _id: "dummyReports.js",
  //   sender: "Elon",
  //   recipient: "Musk",
  //   deliverStatus: "Dodge",
  //   cost: 999,
  // },
  // {
  //   _id: "dummyReports.js",
  //   sender: "Hito",
  //   recipient: "Kage",
  //   deliverStatus: "Pokemon",
  //   cost: 66,
  // },
  // {
  //   _id: "dummyReports.js",
  //   sender: "Sirawit",
  //   recipient: "Kornthip",
  //   deliverStatus: "People",
  //   cost: 123,
  // },
  // {
  //   _id: "dummyReports.js",
  //   sender: "Th",
  //   recipient: "or",
  //   deliverStatus: "Avengers",
  //   cost: 500,
  // },
  // {
  //   _id: "dummyReports.js",
  //   sender: "Docter",
  //   recipient: "Strange",
  //   deliverStatus: "Avengers",
  //   cost: 600,
  // },
  // {
  //   _id: "dummyReports.js",
  //   sender: "Iron",
  //   recipient: "Man",
  //   deliverStatus: "Avengers",
  //   cost: 700,
  // },
]

// for (let i = 0; i < 15; i++) {
//   var sender = faker.name.firstName(); // Rowan Nikolaus
//   var recipient = faker.name.firstName(); // Rowan Nikolaus
//   var deliverStatus = faker.animal.bird().substring(0, 7);
//   var cost = faker.datatype.number();
//   dummyReports.push({
//     _id: "dummyReports.js",
//     sender: sender,
//     recipient: recipient,
//     deliverStatus: deliverStatus,
//     cost: cost,
//   });
// }

const n = 0

for (let i = 0; i < n; i++) {
  console.log(`Generating data..${i}/${n}`)
  const senderInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    postalCode: faker.address.zipCode(),
    address: faker.address.streetName(),
  }
  const recipientInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    postalCode: faker.address.zipCode(),
    address: faker.address.streetName(),
  }
  const parcelInfo = {
    weight: faker.datatype.number(),
    dimension: faker.datatype.number(),
    cost: faker.datatype.number()
  }

  axios.post('/parcel', {
    senderInfo: senderInfo,
    recipientInfo: recipientInfo,
    parcelInfo: parcelInfo
  });
}

// for (let i = 0; i < n; i++) {
//   console.log(`Generating data..${i}/${n}`)
//   const senderInfo = {
//     firstName: faker.name.firstName(),
//     lastName: faker.last_name(),
//     telephone: faker.phone_number(),
//     postalCode: faker.postcode(),
//     address: faker.street_address(),
//   }
//   const recipientInfo = {
//     firstName: faker.first_name(),
//     lastName: faker.last_name(),
//     telephone: faker.phone_number(),
//     postalCode: faker.postcode(),
//     address: faker.street_address(),
//   }
//   const parcelInfo = {
//     weight: faker.datatype.number(),
//     dimension: faker.dataype.number(),
//     cost: faker.datatype.number()
//   }
//   console.log(senderInfo)


//   // axios.post('/parcel', {
//   //   senderInfo: senderInfo,
//   //   recipientInfo: recipientInfo,
//   //   parcelInfo: parcelInfo
//   // });
// }


export default dummyReports

