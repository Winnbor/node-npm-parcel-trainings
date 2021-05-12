const createBtnRef = document.querySelector('[data-action="render"]');

const removeFirstBtnRef = document.querySelector(
  '[data-action="remove-first"]',
);
const removeLastBtnRef = document.querySelector('[data-action="remove-last"]');

const clearBtnRef = document.querySelector('[data-action="destroy"]');

const inputRef = document.querySelector('input');

const boxHolderRef = document.querySelector('#boxes');

let quantity = 0;
inputRef.addEventListener('input', () => {
  quantity = Number(inputRef.value);
});

const randomize = () => Math.round(Math.random() * 255);

const randomizeColor = () => {
  return `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
};

const createDiv = i => {
  const divEl = document.createElement('div');
  divEl.style.width = `${(i - 1) * 10 + 30}px`;
  divEl.style.height = `${(i - 1) * 10 + 30}px`;
  divEl.style.background = `${randomizeColor()}`;
  return divEl;
};

const createBoxes = amount => {
  let divsArr = [];
  for (let index = 1; index <= amount; index += 1) {
    const div = createDiv(index);
    divsArr.unshift(div);
  }

  return divsArr;
};

const createCrazySmth = arr => {
  if (arr.length > 0) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('div-wrapper');

    let result = divWrapper;

    arr.forEach((el, i, arr) => {
      const tempResult = divWrapper.appendChild(el);

      if (i !== arr.length - 1) {
        divWrapper = tempResult;
      }
      if (i === arr.length - 1) {
        divWrapper.appendChild(el);
      }
    });

    boxHolderRef.appendChild(result);
  }
};

const removeFirstElement = () => {
  const firstDivRef = document.querySelector('.div-wrapper');

  firstDivRef.remove();
};

const removeLastElement = () => {
  const lastDivRef = boxHolderRef.lastElementChild;

  lastDivRef.remove();
};

const destroyBoxes = () => {
  boxHolderRef.innerHTML = '';
};

createBtnRef.addEventListener('click', () => {
  const exArr = createBoxes(quantity);

  createCrazySmth(exArr);

  inputRef.value = '';
  quantity = 0;
});

removeFirstBtnRef.addEventListener('click', () => {
  removeFirstElement();
});

removeLastBtnRef.addEventListener('click', () => {
  removeLastElement();
});

clearBtnRef.addEventListener('click', () => {
  destroyBoxes();
});
