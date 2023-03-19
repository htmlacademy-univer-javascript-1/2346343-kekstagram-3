const getRandom = function (from, until)  {
  if (from < 0) {
    from = 0;
  }
  if (until < 0) {
    until = 0;
  }
  from = Math.ceil(from);
  until = Math.floor(until);
  return Math.floor(Math.random() * (until - from + 1)) + from;
};
getRandom(1, 27);

const checkStringSize = function(string, maxSize) {
  return string.length <= maxSize;
};

checkStringSize('baobab', 6);
