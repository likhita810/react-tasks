const btn = document.getElementById("submit");
const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const content = document.getElementById("content");
const form = document.getElementById("form");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(name.value);
    // console.log(number.value);
    // console.log(email.value);
    
    isValid = form.checkValidity();
    if (isValid) {
        createContent();
    
        form.reset();
    } else {
        alert('Given info is not appropriate');
    }

})

function createContent() {
    const card = document.createElement("div");
    card.setAttribute("id", "contentCards");
    card.innerHTML = `
    <h3 id="c-name">${name.value}</h3>
    <p id="c-number">${number.value}</p>
    <p id="c-email">${email.value}</p>
    <button id="delete" onclick = "discard(this)">Delete</button>
    `;
    content.appendChild(card);
}

function discard(contentCards) {
    var element = contentCards;
    element.parentElement.remove();
}

