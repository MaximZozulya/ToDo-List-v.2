'use strict';

const input = document.querySelector('[data-text-field]');
const addToDoBtn = document.querySelector('[data-add-todo-btn]');
const container = document.querySelector('[data-todo-container]');

const todoList = [];

addToDoBtn.addEventListener('click', () => {
    if (input.value.trim()) {  
        todoList.push(input.value); 
        input.value = '';
        
        container.innerHTML = '';
        todoList.forEach((todo) => {
            const todoElement = document.createElement('div');
            todoElement.textContent = todo;
            container.append(todoElement);    
        });

    }
});