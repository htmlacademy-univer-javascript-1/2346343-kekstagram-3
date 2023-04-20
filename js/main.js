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

const checkStringSize = function(string, maxSize) {
  return string.length <= maxSize;
};

checkStringSize('baobab', 6);

const photoData = [];

const createUser = (id) => ({
    id: id,
    url: `photos/${id}.jpg`,
    description: `photo number ${id}`,
    likes: getRandom(15, 200),
    comment: getRandom(0, 200)
});

function getPhotoData() {
    for (let i = 1; i <= 25; i++) {
        photoData.push(createUser(i));
    }
    return photoData;
}
