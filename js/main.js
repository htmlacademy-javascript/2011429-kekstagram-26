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
  console.log('Задан неверный интервал чисел'); // Почему выдается ошибка при записи console.log?
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
