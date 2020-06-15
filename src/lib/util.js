import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import formatISO from 'date-fns/formatISO';

const { decode: heDecode } = require('he');

export function decodeHtmlChars(input) {
  return heDecode(input);
}

export function isSsr() {
  return typeof window === 'undefined';
}

/**
 * Display difference in words; fallback to ISO for SSR
 *
 * @param input Parsable date
 * @return {string}
 */
export function dateToScreen(input) {
  const parsedDate = new Date(input);

  return isSsr()
    ? `${formatISO(parsedDate)}`
    : `${formatDistanceToNow(parsedDate)} ago`;
}

export default {
  dateToScreen,
  decodeHtmlChars,
  isSsr,
};
