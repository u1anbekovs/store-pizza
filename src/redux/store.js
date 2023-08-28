import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice";
import cardSlice from "./slices/cardSlice";
import pizzasSlice from "./slices/pizzasSlice";

export const store = configureStore({
    reducer: {
        filterSlice,
        cardSlice,
        pizzasSlice
    },
})
