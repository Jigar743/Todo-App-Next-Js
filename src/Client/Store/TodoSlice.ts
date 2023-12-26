import { TodosInitialState, TodoType } from "@/Types/TodoTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodosInitialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Array<TodoType>>) {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = TodoSlice.actions;

export default TodoSlice.reducer;
