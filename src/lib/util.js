const { decode: heDecode } = require('he');

export function decodeHtmlChars(input) {
  return heDecode(input);
}

export default {
  decodeHtmlChars,
};
