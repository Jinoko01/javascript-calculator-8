import CalculatorController from './controller/CalculatorController.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const controller = new CalculatorController({
      inputView: new InputView(),
      outputView: new OutputView(),
    });
    await controller.calculate();
  }
}

export default App;
