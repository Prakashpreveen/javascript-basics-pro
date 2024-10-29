const todoList1 = []; //empty array

function addTodo1() {
   inputElemet = document.querySelector('.todo1-input');
   const name = inputElemet.value;
   todoList1.push(name);
   console.log(todoList1);

   inputElemet.value = ''
}