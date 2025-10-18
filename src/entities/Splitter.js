import { ERROR_MESSAGE } from '../data/messages.js';

export default class Splitter {
  split(input, delimiter) {
    const delimiterRegex = this.getEscapedDelimiters(delimiter);
    const result = input.split(delimiterRegex);

    result.forEach((num) => {
      if (Number.isNaN(Number(num)) || num === '') {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
      }
    });

    return result.map(Number);
  }

  getEscapedDelimiters(delimiter) {
    const escaped = delimiter.map((s) =>
      s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    return new RegExp(`(?:${escaped.join('|')})`, 'g');
  }
}
