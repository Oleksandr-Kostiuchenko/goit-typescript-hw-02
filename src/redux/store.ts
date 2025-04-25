//* Redux
import { configureStore } from "@reduxjs/toolkit";
import savedImagesReducer from "./savedSlice";

//* Persist
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
const persistedSavedImagesReducer = persistReducer(
  {
    key: "savedImages",
    storage,
  },
  savedImagesReducer
);

const store = configureStore({
  reducer: {
    savedImages: persistedSavedImagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
