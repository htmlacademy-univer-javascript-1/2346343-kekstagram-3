export const getRandom = function (from, until)  {
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

const checkStringSize = function(string, maxSize) {
  return string.length <= maxSize;
};

const isEscKey = (evt) => evt.key === 'Escape';

const numberDeclination = (num, nominative, genitiveSingular, genitivePlural) => {
  const hundredths = num % 100;
  if (hundredths <= 4 || hundredths > 20) {
    const tenths = num % 10;
    if (tenths === 1) {
      return nominative;
    }
    if (tenths >= 2 && tenths <= 4) {
      return genitiveSingular;
    }
  }
  return genitivePlural;
};

const isEscapeKey = (evt) => evt.keyCode === 27;

const checkForRepeats = (list) => {
  const containerForСomparison = {};
  for (const element of list) {
    if (containerForСomparison[element]) {
      return true;
    }
    containerForСomparison[element] = 1;
  }
  return false;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscKey, numberDeclination, isEscapeKey, checkForRepeats, debounce };

checkStringSize('baobab', 6);
