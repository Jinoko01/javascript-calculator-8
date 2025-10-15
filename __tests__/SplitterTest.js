import Splitter from '../src/entities/Splitter.js';

describe('Splitter 테스트', () => {
  it('split 메소드는 구분자를 기반으로 나누어진 숫자 배열을 반환한다.', () => {
    const inputs = [
      ['1,2,3', [',', ':']],
      ['1;2;3', [',', ':', ';']],
      ['1@2@3', [',', ':', '@']],
      ['1]2]3', [',', ':', ']']],
      ['1|2|3', [',', ':', '|']],
      ['1)2)3', [',', ':', ')']],
    ];
    const returns = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    const splitter = new Splitter();

    inputs.forEach(([input, delimiter], index) => {
      expect(splitter.split(input, delimiter)).toEqual(returns[index]);
    });
  });
});
