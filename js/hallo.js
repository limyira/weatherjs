const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

function handleSubmit(event) {
    event.preventDefault();
    const name = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, name);
    sayHello(name);
}

function sayHello(name) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Nice to meet you ${name}`;
}



const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    sayHello(savedName);
}