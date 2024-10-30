const todoList = [{
   name : 'finish java',
   dueDate : '2024-10-31'
},
{
   name : 'start react',
   dueDate : '2024-10-31'
}]; 


function renderTodoList() {
   let todoListHTML = '';

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const html = `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="todoList.splice(${i},1);
            renderTodoList();
         " class="delete-btn">Delete
         </button>
      `;
      todoListHTML += html;
   }

   document.querySelector('.js-todo-list').
      innerHTML = todoListHTML;
}

function addTodo() {
   inputElement = document.querySelector('.todo-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-duedate-input');
   const dueDate = dateInputElement.value;

   todoList.push({
      // name : name,
      // dudeDate : dueDate,
      name,
      dueDate
   });


   inputElement.value = '';

   renderTodoList();
}
// -------------------------------------------------------------------------------------------------------------
