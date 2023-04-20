import { getRandom } from './util';

const photoData = [];

const createUser = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `photo number ${id}`,
  likes: getRandom(15, 200),
  comment: getRandom(0, 200)
});

export function getPhotoData() {
  for (let i = 1; i <= 25; i++) {
    photoData.push(createUser(i));
  }
  return photoData;
}

getPhotoData();
