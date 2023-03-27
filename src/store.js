import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import modeReducer from "./common/ModeSwitcher/modeSlice";
import personalHomepageReducer from "./features/PersonalHomepage/personalHomepageSlice";
import { saga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        mode: modeReducer,
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
