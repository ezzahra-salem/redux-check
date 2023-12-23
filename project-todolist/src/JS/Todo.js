import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const Todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state = state.push(action.payload);
    },
    donepage: (state, action) => {
      return (state = state.filter((el) => el.name !== action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtodo, donepage } = Todo.actions;

export default Todo.reducer;