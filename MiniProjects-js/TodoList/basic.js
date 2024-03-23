var addTodo = document.getElementById('newTodoBtn');
var popUp = document.getElementById('myModal');
var close = document.querySelector('.close');
var textarea = document.querySelector('#inputTodo');
var addBtn = document.querySelector('#submitTodo');
var ul = document.querySelector('#allNotes');

addTodo.addEventListener('click', function() {
    popUp.style.display = 'block';
})

close.addEventListener('click', function() {
    popUp.style.display = 'none';
})

addBtn.addEventListener('click', function() {
    if (textarea.value.trim() === '') {
        alert('Please enter a valid todo');
    } else {
        var todo = document.createElement('li');
        todo.textContent = textarea.value;
        ul.appendChild(todo);
        popUp.style.display = 'none';
        textarea.value = '';
    }
})




