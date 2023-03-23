import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import modeReducer from "./common/ModeSwitcher/modeSlice";
import { modeSaga } from "./common/ModeSwitcher/modeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        mode: modeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(modeSaga);
export default store;
