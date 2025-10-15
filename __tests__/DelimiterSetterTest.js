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

describe('DelimiterSetter 에러 테스트', () => {
  it('기본 구분자는 커스텀 구분자로 설정할 수 없다.', () => {
    const inputs = ['//,\n1,2,3', '//:\n1:2:3'];

    const delimiterSetter = new DelimiterSetter();

    inputs.forEach((input) => {
      expect(() => delimiterSetter.setDelimiter(input)).toThrow();
    });
  });

  it('커스텀 구분자는 1글자만 가능하다.', () => {
    const inputs = ['//!!\n1!!2!!3', '//!@#!@\n1!@#!@2!@#!@3'];

    const delimiterSetter = new DelimiterSetter();

    inputs.forEach((input) => {
      expect(() => delimiterSetter.setDelimiter(input)).toThrow();
    });
  });

  it('커스텀 구분자로 숫자를 사용할 수 없다.', () => {
    const inputs = ['//1\n11213', '//0\n10203', '//100\n110021003'];

    const delimiterSetter = new DelimiterSetter();

    inputs.forEach((input) => {
      expect(() => delimiterSetter.setDelimiter(input)).toThrow();
    });
  });

  it('커스텀 구분자로 빈 문자열 혹은 공백을 사용하면 안된다.', () => {
    const inputs = ['//\n123', '// \n1@2@3', '//\n\n1\n2\n3', '//\t\n1\t2\t3'];

    const delimiterSetter = new DelimiterSetter();

    inputs.forEach((input) => {
      expect(() => delimiterSetter.setDelimiter(input)).toThrow();
    });
  });

  it('커스텀 구분자를 올바르게 설정해야 한다.', () => {
    const inputs = [
      '/;\n1;2;3',
      ';\n1;2;3',
      '///;\n1;2;3',
      '//;m1;2;3',
      '//;n1;2;3',
      '//;\\1;2;3',
      '//;1;2;3',
      ';1;2;3',
      '//;\\n1;2;3',
    ];

    const delimiterSetter = new DelimiterSetter();

    inputs.forEach((input) => {
      expect(() => delimiterSetter.setDelimiter(input)).toThrow();
    });
  });
});
