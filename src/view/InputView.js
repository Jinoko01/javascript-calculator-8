import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  async promptInput(message) {
    return Console.readLineAsync(message);
  }
}
