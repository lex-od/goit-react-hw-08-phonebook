import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    // persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export {
    store,
    // persistor
};
