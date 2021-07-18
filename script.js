import {
  $,
  generateColumns,
  createCard,
  createColumn,
  getWindowSize,
  getRandomNum
} from './utils.js';

const totalElements = 48;

const cards = Array(totalElements).fill().map((_, index) => ({
  id: index + 1,
  height: getRandomNum(50, 250)
}));

let currentColSize, prevColSize;

const renderGrid = (colSize) => {
  if (currentColSize === prevColSize) return;
  $('.container').innerHTML = '';
  const columns = generateColumns(cards, colSize);
  columns.forEach(column => {
    const columnElement = createColumn(colSize);
    column.forEach(card => {
      const cardElement = createCard(card);
      columnElement.appendChild(cardElement);
    });
    $('.container').appendChild(columnElement);
  });
}

const setColumnSize = () => {
  const windowWidth = getWindowSize().width;
  if (windowWidth < 600) {
    currentColSize = 1;
  } else if (windowWidth >= 600 && windowWidth < 960) {
    currentColSize = 2;
  } else if (windowWidth >= 960 && windowWidth < 1280) {
    currentColSize = 3;
  } else if (windowWidth >= 1280) {
    currentColSize = 4;
  }
  renderGrid(currentColSize);
  prevColSize = currentColSize;
}

window.addEventListener('resize', setColumnSize);

setColumnSize();