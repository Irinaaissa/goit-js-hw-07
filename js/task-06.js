function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector("#controls");
  const boxesDiv = document.querySelector("#boxes");
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const input = controlsDiv.querySelector('input');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      const boxes = [];
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = color;
        boxes.push(box);
      }
      boxesDiv.append(...boxes);
    }
    input.value = '';
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }