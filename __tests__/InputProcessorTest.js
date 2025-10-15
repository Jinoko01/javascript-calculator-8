import InputProcessor from '../src/entities/InputProcessor';

describe('InputProcessor 테스트', () => {
  it('사용자가 입력한 문자열을 처리한다.', () => {
    const inputs = ['1,2,3', '//;\n1;2;3', '테스트 문자열'];

    const inputProcessor = new InputProcessor();
    const process = jest.spyOn(inputProcessor, 'processInput');

    inputs.forEach((input) => {
      inputProcessor.processInput(input);
      expect(process).toHaveBeenCalledWith(input);
    });
  });
});
