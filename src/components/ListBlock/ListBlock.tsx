import { Button } from '../Button';
import { List } from '../List/List';
import './ListBlock.scss';

export const ListBlock = () => {
  return (
    <div className='listBlock'>
      <List />
      <div className='listBlock__buttonLoad'>
        <Button />
      </div>
    </div>
  )
}
