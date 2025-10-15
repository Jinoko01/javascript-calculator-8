import { Console } from '@woowacourse/mission-utils';
import InputProcessor from './entities/InputProcessor';

class App {
  async run() {
    const input = await Console.readLineAsync();

    const inputProcessor = new InputProcessor();
    const result = inputProcessor.processInput(input);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
