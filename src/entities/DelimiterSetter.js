import { ERROR_MESSAGE } from '../data/messages.js';
import { REGEX } from '../data/regex.js';

export default class DelimiterSetter {
  constructor() {
    this.delimiter = [',', ':'];
  }

  setDelimiter(input) {
    if (!REGEX.NUMBER.test(input[0])) {
      this.setCustomDelimiter(input);
    }

    const delimiter = [...this.delimiter];
    this.delimiter = [',', ':'];

    return delimiter;
  }

  setCustomDelimiter(input) {
    const start = input.indexOf('//');
    const end = input.indexOf('\n');

    this.validateSetting(start, end);

    const character = input.slice(2, end);

    this.validateLength(character);
    this.validateCharacter(character);

    this.delimiter.push(character);
  }

  validateSetting(start, end) {
    const isValidSetting = start !== -1 && end !== -1 && start < end;

    if (!isValidSetting) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER_SETTING);
    }
  }

  validateLength(character) {
    if (character.length !== 1) {
      throw new Error(
        character,
        ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER_SETTING_LENGTH
      );
    }
  }

  validateCharacter(character) {
    if (REGEX.NUMBER.test(character)) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER_SETTING_CONTENT);
    }

    if (REGEX.WHITESPACE.test(character)) {
      throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER_SETTING_CONTENT);
    }

    if (this.delimiter.includes(character)) {
      throw new Error(
        ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER_SETTING_BASE_CHARACTER
      );
    }
  }
}
