const btn = document.getElementById('add');
const task = document.getElementById('task');
const card = document.getElementById('card');
const form = document.getElementById('form');
const date = document.getElementById('date')

function addTask() {
    const tcard = document.createElement('div');
    tcard.setAttribute("id","taskCard");
    tcard.innerHTML = `
    <input type="checkbox">
    <p class="cTask">${task.value}</p>
    <p class="cDate">${date.value}</p>
    <button id="delete" onclick = "discard(this)">X</button>
    `;
    card.appendChild(tcard);

    task.value = '';
    date.value = '';
}

function discard(taskCard) {
    var element = taskCard;
    element.parentElement.remove();
}