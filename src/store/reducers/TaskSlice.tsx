/* eslint-disable @typescript-eslint/ban-types */
import { createSlice } from "@reduxjs/toolkit";
import { TodoOptions } from "../../types";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

interface InitialStateProps {
  todos: TodoOptions[];
}

const initialState: InitialStateProps = {
  todos: localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo")!)
    : [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [...state.todos, action.payload];
      state.todos = newTodos;
      localStorage.setItem("todo", JSON.stringify(newTodos));
      toast.success("Todo Added...");
    },
    updateTodo: (state, action) => {
      const updatedTodo = action.payload;
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === updatedTodo.id
      );
      if (todoToUpdate) {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        state.todos = updatedTodos;
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
        toast.success("Todo Updated...");
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);

      // Update state and local storage only if a todo was actually deleted
      if (updatedTodos.length < state.todos.length) {
        state.todos = updatedTodos;
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
        toast.error("Todo Deleted...");
      }
    },
    toggleTodo: (state, action) => {
      const id = action.payload;

      // Find the todo by its ID in the state.todos array
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === id) {
          // Toggle the isCompleted property of the todo
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });

      // Update state and local storage with the updated todos
      state.todos = updatedTodos;
      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      toast.success("Todo status updated...");
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } =
  todoSlice.actions;

// export default todoSlice.reducer