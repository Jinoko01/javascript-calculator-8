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

describe('Splitter 에러 테스트', () => {
  it('구분자 정보에 없는 문자를 사용할 경우 에러가 발생한다.', () => {
    const inputs = [
      '1;2;3',
      ',,',
      '1:2::3',
      '1,2,3,',
      '1,2;3,4',
      ',2,3',
      '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,',
      ',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20',
      '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,,',
    ];

    const splitter = new Splitter();

    inputs.forEach((input) => {
      expect(() => splitter.split(input, [',', ':'])).toThrow();
    });
  });
});
