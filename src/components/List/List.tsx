import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Card } from "../Card";
import './List.scss';
import { useEffect } from "react";
import { addPokemons } from "../../reduxtk/reducers/pokemonSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../reduxtk/store";


export const List = () => {
  const dispatch = useDispatch();
  const statePokemons = useSelector((state: RootState) => state.pokemons);

  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
      const data = await response.json();
      dispatch(addPokemons(data.results));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pokemons } = statePokemons;

  return (
    <ul className="list">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon}/>
      ))}
      
    </ul>
  )
}
