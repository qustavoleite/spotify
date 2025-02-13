import { SingleItem } from './SingleItem'

export const ItemList = ({ title, items }) => {
  return (
    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{title}</h2>
        <a className='item-list__link' href='/'>
          Mostrar tudo
        </a>
      </div>

      <div className='item-list__container'> 
        {Array(items)
          .fill()
          .map((currentValue, index) => (
            <SingleItem key={`${title}-${index}`}/>
          ))}
      </div>
    </div>
  )
}
