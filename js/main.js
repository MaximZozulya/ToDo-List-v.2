'use strict';

const input = document.querySelector('[data-text-field]');
const addToDoBtn = document.querySelector('[data-add-todo-btn]');
const container = document.querySelector('[data-todo-container]');

const todoList = JSON.parse(localStorage.getItem('todos')) || [];

addToDoBtn.addEventListener('click', () => {
    if (input.value.trim()) {  
        todoList.push(input.value); 
        input.value = '';

        localStorage.setItem('todos', JSON.stringify(todoList))
        render();
    }
});

const render = () => {
    container.innerHTML = '';
    todoList.forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.textContent = todo;
    container.append(todoElement); 
    });
}

render();