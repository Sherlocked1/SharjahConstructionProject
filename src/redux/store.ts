import { configureStore } from "@reduxjs/toolkit";
import { RequestsReducer } from "./slices/requests";

export const store = configureStore({
    reducer: {
        requests: RequestsReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>