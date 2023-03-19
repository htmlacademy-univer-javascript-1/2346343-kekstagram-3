let getRandom = function (from, until) {
  if (from < 0) {
    console.warn(from + ' - некорректное значение округлено до 0')
    from = 0;
  }
  if (until < 0) {
    console.warn(until + ' - некорректное значение округлено до 0')
    until = 0;
  }
  from = Math.ceil(from);
  until = Math.floor(until);
  return Math.floor(Math.random() * (until - from + 1)) + from;
}

let checkStringSize = (string, maxSize) => string.length <= maxSize;
