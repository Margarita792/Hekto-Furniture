import { configureStore } from '@reduxjs/toolkit';
import  { productsReducer} from './productSlice';
export type AppStore = typeof store
export const store = configureStore({
    reducer: {
        storageProducts: productsReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;