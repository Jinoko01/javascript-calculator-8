import Calculator from '../src/entities/Calculator.js';

describe('Calculator 테스트', () => {
  it('calculate 메소드가 정상적으로 작동한다.', () => {
    const inputs = ['1,2,3', '//;\n1;2;3', '테스트 문자열'];

    const calculator = new Calculator();
    const process = jest.spyOn(calculator, 'calculate');

    inputs.forEach((input) => {
      calculator.calculate(input);
      expect(process).toHaveBeenCalledWith(input);
    });
  });
});
