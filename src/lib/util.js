export function decodeHtmlChars(input) {
  // check for ssr
  if (typeof document === 'undefined') {
    return input;
  }

  const textarea     = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}

export default {
  decodeHtmlChars,
};
