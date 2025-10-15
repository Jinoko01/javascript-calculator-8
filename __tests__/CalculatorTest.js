import Calculator from '../src/entities/Calculator.js';

describe('Calculator 테스트', () => {
  it('calculate 메소드가 정상적으로 작동한다.', () => {
    const inputs = ['1,2,3', '//;\\n1;2;3'];

    const calculator = new Calculator();
    const process = jest.spyOn(calculator, 'calculate');

    inputs.forEach((input) => {
      calculator.calculate(input);
      expect(process).toHaveBeenCalledWith(input);
    });
  });

  it('parse 메소드는 구분자를 기준으로 나뉘어진 숫자 배열을 반환한다.', () => {
    const inputs = [
      '1,2,3',
      '//;\\n11;12;13',
      '100:200,300',
      '//@\\n1,22:333@4444',
    ];
    const outputs = [
      [1, 2, 3],
      [11, 12, 13],
      [100, 200, 300],
      [1, 22, 333, 4444],
    ];

    const calculator = new Calculator();
    const process = jest.spyOn(calculator, 'parse');

    inputs.forEach((input) => {
      const result = calculator.parse(input);
      expect(process).toHaveBeenCalledWith(input);
      expect(result).toEqual(outputs.shift());
    });
  });

  it('add 메소드는 덧셈 수행 결과를 반환한다.', () => {
    const inputs = [[1, 2, 3], [100, 200, 300], [5]];
    const outputs = [6, 600, 5];

    const calculator = new Calculator();

    inputs.forEach((input, index) => {
      const result = calculator.add(input);
      expect(result).toEqual(outputs[index]);
    });
  });
});
