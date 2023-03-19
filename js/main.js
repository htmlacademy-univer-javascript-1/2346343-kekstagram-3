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

function checkStringSize  (string, maxSize) {
  string.length <= maxSize;
}
