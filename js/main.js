// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Math.ceil округлит минимальное число до ближайшего целого в большую сторону
// Math.floor округлит максимальное число до ближайшего целого в меньшую сторону

function getRandomInteger(min, max) {
  if(min >= 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Задан неверный интервал чисел';
}
getRandomInteger(0, 2);

// Функция для проверки максимальной длины строки
function checkLenght(stringLength, maxLenght) {
  if (stringLength.length <= maxLenght) {
    return true;
  }
  return false;
}
checkLenght('Hello, world', 140);


//Генерация данных для описания фотографии

const id = [];
for (let i = 1; i <= 25; i++) {
  id.push(i);
}

const url = [];
for (let i = 1; i <= 25; i++) {
  url.push(`photos/${i}.jpg`);
}

const DESCRIPTION = [
  'Усы, лапы, хвост - вот мои документы',
  'Игры котика',
  'Мой любимец!',
  'Мрлык',
  'Самый прикольный кот',
  'Гроза мышей',
  'Кто хозяин в доме?!',
  'Лучшая работа - это сон!',
  'Жду еду',
  'Прыжок с переворотом в погоне за едой',
  'Все, пора спать'
];

const likes = [];
for (let i = 15; i <= 200; i++) {
  likes.push(i);
}

/*let idComments = [];
for (let i = 1; i < Infinity; i++) {
  idComments.push(i);
}
*/

const avatar = [];
for (let i = 1; i <= 6; i++) {
  avatar.push(`img/avatar-${i}.svg`);
}

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Игорь',
  'Максим',
  'Кристина',
  'Роман',
  'Глеб',
  'Александра',
  'Анастасия',
  'Александр',
  'Михаил'
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const  getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createComments = () => {
  return {
  id: getRandomPositiveInteger(0, Number.MAX_SAFE_INTEGER),
  avatar: getRandomArrayElement(avatar),
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME)
  };
};

const comments = Array.from({length: 6}, createComments);


const getDescrPhoto = () => {
  return {
  id: getRandomArrayElement(id),
  url: getRandomArrayElement(url),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomArrayElement(likes),
  comments: getRandomArrayElement(comments)
  };
};

const descrPhoto = Array.from({length: 25}, getDescrPhoto);
descrPhoto();

