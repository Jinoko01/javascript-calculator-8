import Calculator from './Calculator';

export default class InputProcessor {
  constructor() {
    this.calculator = new Calculator();
  }

  processInput(input) {
    this.calculator.calculate(input);
  }
}
