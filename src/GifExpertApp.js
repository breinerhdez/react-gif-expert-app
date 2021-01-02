import React, {useState} from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['Naruto', 'Dragon Ball', 'Samurai X']
    const [categories, setCategories] = useState(['Ranma'])

    // const handleAdd = () => { 
    //     // const newCategories = categories.map(cat => cat)
    //     // newCategories.push("Hola mundo")
    //     setCategories([...categories, "Hola mundo"])
    //     setCategories( cats => [ ...cats, "hola mundo"] )
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    )
                } 
            </ol>
            
        </>
    )
}