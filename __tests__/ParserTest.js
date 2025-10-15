import Parser from '../src/entities/Parser.js';

describe('Parser 테스트', () => {
  it('기본 및 커스텀 구분자를 통해 나눠진 숫자 배열을 반환한다.', () => {
    const inputs = ['1,2,3', '//;\\n1;2;3', '//@\\n1@2,3:4'];
    const returns = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3, 4],
    ];

    const parser = new Parser();

    inputs.forEach((input, index) => {
      expect(parser.parse(input)).toEqual(returns[index]);
    });
  });

  it('setDelimiter 메소드를 통해 기본 및 커스텀 구분자 정보를 반환한다.', () => {
    const inputs = ['1,2,3', '//;\\n1;2;3', '//@\\n1@2@3'];
    const returns = [
      ['1,2,3', [',', ':']],
      ['1;2;3', [',', ':', ';']],
      ['1@2@3', [',', ':', '@']],
    ];

    const parser = new Parser();

    inputs.forEach((input, index) => {
      expect(parser.setDelimiter(input)).toEqual(returns[index]);
    });
  });

  it('split 메소드는 구분자 정보를 기반으로 문자열을 나눠 숫자 배열을 반환한다.', () => {
    const inputs = [
      ['1,2,3', [',', ':']],
      ['1;2;3', [',', ':', ';']],
      ['1@2@3', [',', ':', '@']],
    ];
    const returns = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    const parser = new Parser();

    inputs.forEach(([input, delimiter], index) => {
      expect(parser.split(input, delimiter)).toEqual(returns[index]);
    });
  });
});
