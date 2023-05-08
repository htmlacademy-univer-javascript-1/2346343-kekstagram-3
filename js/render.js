import {getPhotoData} from './data.js';

const photoData = getPhotoData();

const userTemp = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const patternUserFragment = document.createDocumentFragment();

export const render = () => {
  for (let i = 0; i < photoData.length; i++ ) {
    const user = photoData[i];

    const temp = userTemp.cloneNode(true);
    temp.querySelector('.picture__img').setAttribute('src', user.url);
    temp.querySelector('.picture__info').querySelector('.picture__comments').textContent = user.comment;
    temp.querySelector('.picture__info').querySelector('.picture__likes').textContent = user.likes;
    patternUserFragment.append(temp);
  }
  pictures.append(patternUserFragment);
};
//Задание 7 часть 2
