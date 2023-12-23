import { createSlice } from '@reduxjs/toolkit'

const initialState = [{}]


export const todo = createSlice({
name: 'todo',
initialState,
reducers: {
    addtask: (state, action) => {
        state = state.push(action.payload);
    },
    donepage: (state, action) => {
        return (state = state.filter((el) => el.name !== action.payload));
      },
      update:(state,action)=>{
        return state.map((el)=>el.name == action.name?action.payload:null)
      }
    }
},
)

// Action creators are generated for each case reducer function
export const { addtask,donepage,update } = todo.actions

export default todo.reducer