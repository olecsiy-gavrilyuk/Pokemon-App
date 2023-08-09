import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './reducers/pokemonSlice';
import statsSlice from './reducers/statsSlice';


export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
    stats: statsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;