import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

import InvoiceReducer from '../reducer/reducer'

const persistStoreConfig = {
    key: 'root',
    storage,
    whitelist: ['invoice']
}

const persistedReducer = persistReducer(persistStoreConfig, InvoiceReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)