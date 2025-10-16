import Calculator from './Calculator.js';
import { ERROR_MESSAGE } from '../data/messages.js';

export default class InputProcessor {
  constructor() {
    this.calculator = new Calculator();
  }

  processInput(input) {
    if (input === '') {
      return 0;
    }

    this.validateInput(input);
    return this.calculator.calculate(input);
  }

  validateInput(input) {
    this.validateType(input);
    this.validateContent(input);
  }

  validateType(input) {
    if (typeof input !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_TYPE);
    }
  }

  validateContent(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.INPUT_EMPTY_STRING);
    }
  }
}
