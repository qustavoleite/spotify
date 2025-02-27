import React from 'react'
import { Player } from '../components/Player'
import { Link } from 'react-router-dom'

export const Song = () => {
  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img
            src='https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24'
            alt='Imagem da música x'
          />
        </div>
      </div>
      <div className='song__bar'>
        <Link to='/artist/1' className='song__artist-image'>
          <img
          width={75}
          height={75}
            src='https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24'
            alt='Imagem do artist x'
          />
        </Link>

        <Player />

        <div>
          <p className='song__name'>Última Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  )
}
