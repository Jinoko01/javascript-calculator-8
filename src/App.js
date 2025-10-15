import { Console } from '@woowacourse/mission-utils';
import InputProcessor from './entities/InputProcessor';

class App {
  async run() {
    const input = await Console.readLineAsync();

    const inputProcessor = new InputProcessor();
    const result = inputProcessor.processInput(input);

    Console.print(result);
  }
}

export default App;
