const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', function() {
    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
              
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
});