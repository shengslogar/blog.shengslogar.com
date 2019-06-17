export function decodeHtmlChars(input) {
  const textarea     = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}

export default {
  decodeHtmlChars,
};
