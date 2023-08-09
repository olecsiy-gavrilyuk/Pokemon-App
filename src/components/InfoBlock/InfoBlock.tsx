import { useSelector } from 'react-redux';
import { CardInfo } from '../CardInfo';
import './InfoBlock.scss';
import { RootState } from '../../reduxtk/store';

export const InfoBlock = () => {
  const statsPokemons = useSelector((state: RootState) => state.stats);
  const {
    stats,
  } = statsPokemons;
  return (
    <div className="infoBlock">
      {stats.weight !== 0 && (
        <CardInfo />
      )}
    </div>
  )
}
