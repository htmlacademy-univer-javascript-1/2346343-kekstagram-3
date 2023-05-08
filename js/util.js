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

export function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

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

export { isEscKey, numberDeclination };
checkStringSize('baobab', 6);
