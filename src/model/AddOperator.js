import OperatorStrategy from './Operator.js';

export default class AddOperator extends OperatorStrategy {
  operate(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
}
