import { ItemList } from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

export const Main = ({type}) => {
  return (
    <div className='main'>
      {type === 'artists' || type === undefined ? <ItemList
        title='Artistas populares'
        items={5}
        itemsArray={artistArray}
        path='/artists'
        idPath='/artist'
      />
    : <></>}
      
      {type === 'songs' || type === undefined ? <ItemList
        title='Músicas populares'
        items={10}
        itemsArray={songsArray}
        path='/songs'
        idPath='/song'
      />
    : <></>}
    </div>
  )
}
