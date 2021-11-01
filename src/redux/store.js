import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import studioReducer from "./studioRedux";
import blogReducer from "./blogRedux";
import instrumentReducer from "./instrumentRedux";
import memberReducer from "./memberRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  studio: studioReducer,
  blog: blogReducer,
  instrument: instrumentReducer,
  member: memberReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
