import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isComplicate?: boolean;
};

type initialState = {
  todos: TTodo[];
};

const initialState: initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isComplicate: false });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((Item) => Item.id !== action.payload);
    },
    toggle: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((i) => i.id == action.payload);
      task!.isComplicate = !task?.isComplicate;
    },
  },
});

export const { addTodo, remove, toggle } = TodoSlice.actions;
export default TodoSlice.reducer;
