export const $ = el => document.querySelector(el);

export const createColumn= (n) => {
  const column = document.createElement('div');
  column.classList = `column-${n} column-margin`;
  return column;
}

export const createCard = ({ id, height }) => {
  const card = document.createElement('div');
  card.textContent = id;
  card.style.height = height + 'px';
  card.className = 'card';
  return card;
}

export const generateColumns = (arr, totalCol) => {
  const defaultArray = Array.from(Array(totalCol), () => []);
  return arr.reduce((acc, val, index) => {
    const column = index % totalCol;
    acc[column].push(val)
    return acc;
  }, defaultArray)
}

export const getWindowSize = () => {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}

export const getRandomHeight = (min, max) => (Math.random() * (max - min) + min);