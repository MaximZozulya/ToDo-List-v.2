'use strict';

const input = document.querySelector('[data-text-field]');
const addToDoBtn = document.querySelector('[data-add-todo-btn]');
const container = document.querySelector('[data-todo-container]');

const todoList = JSON.parse(localStorage.getItem('todos')) || [];

const saveLocalStorage = (key = 'todos') => {
    localStorage.setItem(key, JSON.stringify(todoList));
}

addToDoBtn.addEventListener('click', () => {
    if (input.value.trim()) {  
        todoList.push(input.value); 
        input.value = '';

        saveLocalStorage();
        render();
    }
});

const createElement = (tagName, textContent) => {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    return element;
}

const removeTodo = (index) => {
    todoList.splice(index, 1);
    saveLocalStorage();
    render();
}

const render = () => {
    container.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoElement = createElement('div', todo);
        const removeElement = createElement('button', 'delete');
        removeElement.addEventListener('click', () => removeTodo(index) );

        todoElement.classList.add('todo-item');
        todoElement.append(removeElement);
        container.append(todoElement); 
    });
}

render();