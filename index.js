let addTodoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addTodoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    })
})