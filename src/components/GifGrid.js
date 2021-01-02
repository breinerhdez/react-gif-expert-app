import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {
        // loading ? 'Cargando...' : 'Información completa.'
        loading && 'Cargando...'
      }

      <div className='card-grid'>
        {
          // usando el componente encargado de renderizar cada item
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
