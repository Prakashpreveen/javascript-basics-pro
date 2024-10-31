const todoList = []; 


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
         <button 
         " class="delete-btn js-delete-btn">Delete
         </button>
      `;
      todoListHTML += html;
   }

   document.querySelector('.js-todo-list').
      innerHTML = todoListHTML;

   document.querySelectorAll('.js-delete-btn')
      .forEach((deletebtn,index) => {
         deletebtn.addEventListener('click',() => {
            todoList.splice(index,1);
            renderTodoList();
         });
      })
}

document.querySelector('.main-btn').addEventListener('click',() => {
   addTodo();
});

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
