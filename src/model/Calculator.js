import AddOperator from './AddOperator.js';
import Parser from './Parser.js';

export default class Calculator {
  constructor() {
    this.parser = new Parser();
    this.setOperator();
  }

  calculate(input) {
    const arr = this.parse(input);
    return this.operate(arr);
  }

  parse(input) {
    return this.parser.parse(input);
  }

  operate(nums) {
    return this.operator.operate(nums);
  }

  setOperator() {
    // 만약 여러 연산이 추가될 경우, 요구사항에 따른 operator 세터 메소드 구현
    this.operator = new AddOperator();
  }
}
