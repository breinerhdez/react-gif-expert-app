import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        // normal atendiendo la promesa
        // getGifs(category).then( imgs => setImages( imgs ) )
        
        // forma optimizada, el primer argumento se envía como parámetro de la función setImages
        // esta y la anterior son exáctamente lo mismo
        getGifs(category).then( setImages )
    }, [ category ])

    // El código se va para helpers/getGifs.js
    // const getGifs = async() => {

    //     const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=e8EVVoIXa7ZXcn8hEkRMj5YCSr3xE6FD&limit=10`
    //     const resp = await fetch( url )
    //     const {data} = await resp.json()

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs) 
    //     setImages(gifs)
    // }

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {/* <ol>
                    {
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
                    }
                </ol> */
                    
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
