import { configureStore } from '@reduxjs/toolkit'
import MergeReducer from "./MergeSlice"
export const store = configureStore({
  reducer: {
    mergePdf:MergeReducer
  },
})