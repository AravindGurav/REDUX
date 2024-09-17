import { createStore } from "redux";
import todosReducer from "./todosReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  updateTodoList();
});

//getting the DOM Elements

const todoInput = document.querySelector("#todoInput");
const addTodoButton = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

// const addTodoHandler = () => {
//   const todoValue = todoInput.value;
//   if (todoValue) {
//     store.dispatch({ type: "ADD_TODO", payload: todoValue });
//   }
// };

const addTodoHandler = () => {
  const todoValue = todoInput.value;
  if (todoValue) {
    store.dispatch(addTodo(todoValue));
  }
};

// window.removeTodoHandler = (index) => {
//   store.dispatch({ type: "REMOVE_TODO", payload: index });
// };

window.removeTodoHandler = (index) => {
  store.dispatch(removeTodo(index));
};

addTodoButton.addEventListener("click", addTodoHandler);

const updateTodoList = () => {
  const state = store.getState();
  todoList.innerHTML = state.todos
    .map((todo, index) => {
      return `<li>${todo} <button onClick="removeTodoHandler(${index})">Remove</button></li>`;
    })
    .join("");
};

updateTodoList();
