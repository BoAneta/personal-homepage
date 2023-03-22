import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./common/ModeSwitcher/modeSlice";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
    },
});