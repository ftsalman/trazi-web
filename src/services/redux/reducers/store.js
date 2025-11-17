import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reducers/siderbarReducer";


export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    
 
  },
});

