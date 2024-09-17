import { ADD_TODO, REMOVE_TODO } from "./actions";

const initialState = { todos: [] };

// const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return { ...state, todos: [...state.todos, action.payload] };
//     case "REMOVE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((todoItem, index) => index != action.payload),
//       };
//     default:
//       return state;
//   }
// };

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todoItem, index) => index != action.payload),
      };
    default:
      return state;
  }
};
export default todosReducer;
