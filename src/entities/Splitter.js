export default class Splitter {
  split(input, delimiter) {
    const escaped = delimiter
      .map((s) => s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'))
      .sort((a, b) => b.length - a.length);
    const delimiterRegex = new RegExp(`(?:${escaped.join('|')})`, 'g');
    return input.split(delimiterRegex).map(Number);
  }
}
