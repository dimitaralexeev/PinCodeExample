import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

import pinCodeReducer from './pinCode';
import uiReducer from './ui';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, pinCodeReducer);

export const store = configureStore({
  reducer: {
    pinCode: persistedReducer,
    ui: uiReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);


export default store;
