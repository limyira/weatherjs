const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODO_KEY = "todo";


function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function addTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
    
    
}


function stopF5(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text: todo,
        id: Date.now()
    };
    todos.push(todoObj);
    addTodo(todoObj); 
    saveTodo();
}


todoForm.addEventListener("submit", stopF5);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo) {
    const parsetodos = JSON.parse(savedTodo);
    todos = parsetodos;
    parsetodos.forEach(addTodo);

    
}