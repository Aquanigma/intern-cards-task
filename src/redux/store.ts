import { configureStore } from '@reduxjs/toolkit';
import cardsStateReducer from "./cards/cards-state";

const store = configureStore({
    reducer: {
        cardsState:cardsStateReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
