function getRandom (from, until) {
  if (from < 0) {
    from = 0;
  }
  if (until < 0) {
    until = 0;
  }
  from = Math.ceil(from);
  until = Math.floor(until);
  return Math.floor(Math.random() * (until - from + 1)) + from;
}

const RANDOM = getRandom(0, 27);

function checkStringSize  (string, maxSize) {
  return string.length <= maxSize;
}

const TEST_CSHECK_STRING_SIZE = checkStringSize('baobab', 6);
