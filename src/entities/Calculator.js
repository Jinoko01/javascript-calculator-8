import AddOperator from './AddOperator.js';
import Parser from './Parser.js';

export default class Calculator {
  constructor() {
    this.parser = new Parser();
    this.addOperator = new AddOperator();
  }

  calculate(input) {
    const arr = this.parse(input);
    return this.add(arr);
  }

  parse(input) {
    return this.parser.parse(input);
  }

  add(nums) {
    return this.addOperator.add(nums);
  }
}
