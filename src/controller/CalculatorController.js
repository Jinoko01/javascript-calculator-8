import { ERROR_MESSAGE, SYSTEM_MESSAGE } from '../data/messages.js';
import Calculator from '../model/Calculator.js';

export default class CalculatorController {
  constructor({ inputView, outputView }) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.calculator = new Calculator();
  }

  async calculate() {
    const input = await this.inputView.promptInput(SYSTEM_MESSAGE.INPUT);
    const result = this.processInput(input);
    this.outputView.printResult(result);
  }

  processInput(input) {
    if (input === '') {
      return 0;
    }

    this.validateType(input);
    return this.calculator.calculate(input);
  }

  validateType(input) {
    if (typeof input !== 'string') {
      throw new Error(ERROR_MESSAGE.INVALID_TYPE);
    }
  }
}
