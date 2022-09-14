import { configureStore } from '@reduxjs/toolkit';
import HeroReducer from './reducers/HeroReducer';

//reducers

const store = configureStore({
  reducer: {
    heroes: HeroReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
