import DelimiterSetter from './DelimiterSetter.js';
import Splitter from './Splitter.js';

export default class Parser {
  constructor() {
    this.delimiterSetter = new DelimiterSetter();
    this.splitter = new Splitter();
  }

  parse(input) {
    const [newInput, delimiter] = this.setDelimiter(input);
    return this.split(newInput, delimiter);
  }

  setDelimiter(input) {
    return this.delimiterSetter.setDelimiter(input);
  }

  split(input, delimiter) {
    return this.splitter.split(input, delimiter);
  }
}
