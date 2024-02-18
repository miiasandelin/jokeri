const list = document.querySelector('#numbers');
const button = document.querySelector('#uusi_rivi');
const rowCounterDisplay = document.querySelector('#row_counter');

let rowCount = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addTableRow = () => {
    const tr = list.insertRow();
    for (let i = 0; i < 7; i++) {
        const randomNum = getRandomIntNumberInRange(0, 9);
        const td = tr.insertCell(i);
        td.textContent = randomNum;
        td.classList.add('cell');
    }
    rowCount++;
    updateRowCountDisplay();
};

const updateRowCountDisplay = () => {
    rowCounterDisplay.textContent = `Valmiita rivejä ${rowCount}`;
};

button.addEventListener('click', addTableRow);

updateRowCountDisplay();
