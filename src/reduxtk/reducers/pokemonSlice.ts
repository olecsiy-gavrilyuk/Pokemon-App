import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../../types/Pokemon';

type PokemonState = {
  pokemons: Pokemon[];
}
const initialState: PokemonState = {
  pokemons: [],
}

const pokemonSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
  addPokemons(state, action: PayloadAction<Pokemon[]>) {
    state.pokemons.push(...action.payload);
  },
},
});

export const { addPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;