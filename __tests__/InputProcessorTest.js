import InputProcessor from '../src/entities/InputProcessor.js';

describe('InputProcessor 테스트', () => {
  it('사용자가 입력한 문자열을 처리한다.', () => {
    const inputs = ['1,2,3', '//;\\n1;2;3'];
    const outputs = [6, 6];

    const inputProcessor = new InputProcessor();

    inputs.forEach((input, index) => {
      const result = inputProcessor.processInput(input);
      expect(result).toEqual(outputs[index]);
    });
  });

  it('문자열이 아닌 경우 에러를 발생시킨다.', () => {
    const inputs = [123, true, null, undefined, {}, []];
    const inputProcessor = new InputProcessor();

    inputs.forEach((input) => {
      expect(() => inputProcessor.processInput(input)).toThrow();
    });
  });
});
