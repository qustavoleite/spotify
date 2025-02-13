import { SingleItem } from './SingleItem'
import { Link } from 'react-router-dom'

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{title}</h2>
        <Link to={path} className='item-list__link'>
          Mostrar tudo
        </Link>
      </div>

      <div className='item-list__container'>
        {itemsArray
          .filter((currentValor, index) => index < items)
          .map((currentObject, index) => (
            <SingleItem
              {...currentObject}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  )
}
