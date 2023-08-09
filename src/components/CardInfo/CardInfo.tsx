import { useSelector } from 'react-redux';
import { RootState } from '../../reduxtk/store';
import './CardInfo.scss';

export const CardInfo = () => {
  const statsPokemons = useSelector((state: RootState) => state.stats);
  const {
    stats,
  } = statsPokemons;

  console.log(stats)
  return (
    <div className="cardInfo">
      <div className='cardInfo__square' />
      <div className='cardInfo__name'>
        {stats.name}
      </div>

      <div className='cardInfo__statsInfo'>
        <ul className='cardInfo__statsList'>
          <li className='cardInfo__listItem cardInfo__listBorder'>
            type
          </li>
          {stats.stats.map(({stat}) => (
            <li  className='cardInfo__listItem cardInfo__listBorder' key={stat.url}>
              {stat.name}
            </li>
          ))}
        </ul>

        <ul className='cardInfo__listNumber'>
        <li className='cardInfo__listItemNumber cardInfo__listBorder'>
            {stats.types.map((item) => (
              <span 
                className='cardInfo__textType'
                key={item.type.url}>
                {item.type.name}
              </span>
            ))}
          </li>
          {stats.stats.map((item) => (
            <li  className='cardInfo__listItemNumber cardInfo__listBorder' key={item.stat.url}>
              {item.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
