import { addPokemons } from '../../reduxtk/reducers/pokemonSlice';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import './Button.scss';
import { useState } from 'react';

export const Button = () => {
  const [page, setPage] = useState(12);
  const dispatch = useDispatch();

  const LoadPokemons = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page}`);
      setPage(page + 12);
      const data = await response.json();
      dispatch(addPokemons(data.results));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <button 
      className="button"
      onClick={() => LoadPokemons()}
    >
      Load More
    </button>
  )
}
