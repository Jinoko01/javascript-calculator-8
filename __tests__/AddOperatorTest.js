import AddOperator from '../src/entities/AddOperator.js';

describe('AddOperator 테스트', () => {
  it('덧셈 연산을 수행한다.', () => {
    const inputs = [[1, 2, 3], [100, 200, 300], [5]];
    const returns = [6, 600, 5];

    const addOperator = new AddOperator();

    inputs.forEach((input, index) => {
      expect(addOperator.add(input)).toEqual(returns[index]);
    });
  });
});
