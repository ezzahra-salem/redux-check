import { configureStore } from '@reduxjs/toolkit'
import todo from './Todo'
export const store = configureStore({
  reducer: {todo:todo},
})
export default store