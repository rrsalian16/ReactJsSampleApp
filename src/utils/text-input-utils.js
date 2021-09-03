// const PHONE_NUMBER_FORMAT = /^[0]?[123456789]\d{9}$/; /** When we need Starting Number restriction, remoive the numbers which are not required */
const PHONE_NUMBER_FORMAT = /^[0-9][0-9]*$/;
const ALPHANUMERIC = /^[a-zA-Z0-9]*$/;
const EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/** check if a valid phone number */
const isValidPhoneNumber = (phoneNumber) => {
  return PHONE_NUMBER_FORMAT.test(phoneNumber) && phoneNumber.length <= 10 && phoneNumber.length >= 7;
};

/** check if it is the valid email or not */
const isValidEmail = (email) => {
  return EMAIL.test(email);
};

const isAlphaNumeric = (text) => {
  return ALPHANUMERIC.test(text);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const fullNumbers = (text) => text.replace(/[^0-9]/g, '');
const getMaskedDigit = (value) => (value ? '*' : '');
/** handles keyboard backspace event */
const onKeyPressEvent = (nativeEvent, value, nextFocus) => (nativeEvent.key === 'Backspace' ? (value === '' ? nextFocus.focus() : {}) : {});

export const TextInputUtils = {
  fullNumbers,
  getMaskedDigit,
  onKeyPressEvent,
  isValidPhoneNumber,
  isValidEmail,
  isAlphaNumeric,
  getRandomInt,
};
