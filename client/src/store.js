import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from './features/Home/recipesSlice';

export const store = configureStore({
  reducer: {recipes: recipesReducer},
})