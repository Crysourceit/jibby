import faker from 'faker';
import axios from 'axios';
import { postalCode } from "./postalCode";
faker.locale = "en";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getFakeParcelInfo = () => {
  let randWeight = getRandomInt(1, 100);
  let randDimension = getRandomInt(25, 500);
  return {
    weight: randWeight,
    dimension: randDimension,
    cost: randWeight * 5 + randDimension / 10
  }
}

const dummyReports = []


const n = 0;
for (let i = 0; i < n; i++) {

  let randSenderInt = getRandomInt(0, postalCode.length - 1)
  let randRecipientInt = getRandomInt(0, postalCode.length - 1)
  console.log(`Generating data..${i}/${n}`)
  const senderInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    postalCode: postalCode[randSenderInt].postalCode,
    address: postalCode[randSenderInt].province,
  }
  const recipientInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    postalCode: postalCode[randRecipientInt].postalCode,
    address: postalCode[randRecipientInt].province,
  }
  const parcelInfo = getFakeParcelInfo();

  axios.post('/parcel', {
    senderInfo: senderInfo,
    recipientInfo: recipientInfo,
    parcelInfo: parcelInfo
  });
}

export default dummyReports