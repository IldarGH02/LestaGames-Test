import { configureStore, combineReducers } from '@reduxjs/toolkit'
import vehiclesReducer from "./shipsSlices";
import logger from 'redux-logger'

const rootReducer = combineReducers({
    vehicles: vehiclesReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }).concat(logger)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store