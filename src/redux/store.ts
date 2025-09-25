import sidebarReducer from "@/redux/features/sidebar/sidebarSlice";
import stepperReducer from "@/redux/features/stepper/stepperSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    stepper: stepperReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
