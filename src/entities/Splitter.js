import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export default class Splitter {
  split(input, delimiter) {
    const delimiterRegex = this.getEscapedDelimiters(delimiter);
    const result = input.split(delimiterRegex);

    this.validateNumber(result);

    return result.map(Number);
  }

  getEscapedDelimiters(delimiter) {
    const escaped = delimiter.map((s) =>
      s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    return new RegExp(`(?:${escaped.join('|')})`, 'g');
  }

  validateNumber(result) {
    result.forEach((num) => {
      if (!REGEX.NUMBER.test(num)) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
      }
    });
  }
}
