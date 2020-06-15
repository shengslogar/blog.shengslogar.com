const { decode: heDecode } = require('he');

export function decodeHtmlChars(input) {
  return heDecode(input);
}

export function isSsr() {
  return typeof window === 'undefined';
}

export default {
  decodeHtmlChars,
  isSsr
};
