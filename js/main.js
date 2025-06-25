'use strict';

const input = document.querySelector('[data-text-field]');
const addToDoBtn = document.querySelector('[data-add-todo-btn]');
const container = document.querySelector('[data-todo-container]');

addToDoBtn.addEventListener('click', () => {
    if (input.value.trim()) {        
        const todo = document.createElement('div');
        todo.textContent = input.value;
        container.append(todo);
        input.value = '';
    }
});