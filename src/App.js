import { Console } from '@woowacourse/mission-utils';
import InputProcessor from './entities/InputProcessor.js';
import { SYSTEM_MESSAGE } from './data/messages.js';

class App {
  async run() {
    const input = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT);

    const inputProcessor = new InputProcessor();
    const result = inputProcessor.processInput(input);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
