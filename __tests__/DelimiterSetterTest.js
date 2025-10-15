import DelimiterSetter from '../src/entities/DelimiterSetter.js';

describe('DelimiterSetter 테스트', () => {
  it('커스텀 구분자 설정 여부를 확인하고, 구분자로 사용할 문자 정보를 반환한다.', () => {
    const inputs = ['1,2,3', '//;\n1;2;3', '//@\n1@2@3'];
    const returns = [
      [',', ':'],
      [',', ':', ';'],
      [',', ':', '@'],
    ];

    const delimiterSetter = new DelimiterSetter();
    inputs.forEach((input, index) => {
      expect(delimiterSetter.setDelimiter(input)).toEqual(returns[index]);
    });
  });
});
