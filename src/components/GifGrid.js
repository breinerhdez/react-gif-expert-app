import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            
            { 
            // loading ? 'Cargando...' : 'Información completa.'
            loading && 'Cargando...'
            }
            
            <div className="card-grid">
                 {
                    //  <ol>
                        // Con retorno explícito
                        // images.map(img => (
                        //     <li key={ img.id }>{ img.title }</li>
                        // ))

                        // normal, abriendo llaves o SIN retorno explícito
                        // images.map(img => {
                        //    return <li key={ img.id }>{ img.title }</li>
                        // })

                        // conociendo la data y haciendo desestructiración
                        // images.map( ({ id, title }) => {
                        //     return <li key={ id }>{ title }</li>
                        //  })
                    
                    // </ol> 
                
                // usando el componente encargado de renderizar cada item
                images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                ))
                }
            </div>
        </>
    )
}
