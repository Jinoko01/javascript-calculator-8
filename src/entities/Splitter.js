export default class Splitter {
  split(input, delimiter) {
    const delimiterRegex = new RegExp(`[${delimiter.join('')}]`, 'g');
    return input.split(delimiterRegex).map(Number);
  }
}
