import { FC, useEffect, useState } from 'react';
import { Pokemon } from '../../types/Pokemon';
import './Card.scss';
import { Type } from '../../types/Type';
import classNames from 'classnames';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addStats } from '../../reduxtk/reducers/statsSlice';


type Props = {
  pokemon: Pokemon;
}

export const Card: FC<Props> = ({ pokemon }) => {
  const dispatch = useDispatch(); 
  const [types, setTypes] = useState<Type[]>([]);
  const {
    name,
    url
  } = pokemon;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTypes(data.types);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const getStatsPromise = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetchData(); 
        dispatch(addStats({
          stats: data.stats,
          types: data.types,
          weight: data.weight,
          name: name,
        })); 
        resolve("Success");
      } catch (error) {
        console.error('Error getting stats:', error);
        reject(error); 
      } finally {
        console.log('')
      }
    });
  };


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li 
      className="card"
      onClick={() => getStatsPromise()}
      >
      <div className='card__square' />
      <div className='card__name'>
        {name}
      </div>
      <div className='card__blockTypes'>
        {types.map((item) => (
          <div key={item.slot} className={classNames('card__type', item.type.name)}>
            {item.type.name}
          </div>
        ))}
      </div>
    </li>
  )
}
