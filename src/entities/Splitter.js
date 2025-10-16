import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export default class Splitter {
  split(input, delimiter) {
    const escaped = delimiter.map((s) =>
      s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    const delimiterRegex = new RegExp(`(?:${escaped.join('|')})`, 'g');
    const result = input.split(delimiterRegex);

    result.forEach((num) => {
      if (!REGEX.NUMBER.test(num)) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
      }
    });

    return result.map(Number);
  }
}
