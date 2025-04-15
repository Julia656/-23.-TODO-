const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Видалити</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});


taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const item = event.target.closest('li');
    item.remove();
  }
});