import { ItemList } from './ItemList'

export const Main = () => {
  return (
    <div className='main'>
      {/* artistas */}
      <ItemList title="Artistas populares" items={10}/>

      {/* musicas */}
      <ItemList title="Músicas populares" items={15}/>
    </div>
  )
}
