import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import { Stats } from '../../types/Stats';

interface PokemonStats {
  stats: Stats;
}

const initialState: PokemonStats = {
  stats: {
    stats: [],
    types: [],
    weight: 0,
    name: '',
  },
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addStats(state, action: PayloadAction<Stats>) {
      state.stats = action.payload;
    },
  },
});

export const { addStats } = statsSlice.actions;

export default statsSlice.reducer;