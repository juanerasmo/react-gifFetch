import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [category, setCategory] = useState(['One Piece']);

// const handleAdd = () => {
//     setCategory( [...category,document.getElementById('campo').value])
// }


    return( 
        <>
            <h2>Gif</h2>
            <AddCategory setCategory={ setCategory }/>
            <hr />

            {/* <input type='text' id='campo' />
            <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    category.map( category => {
                        return <GifGrid 
                                    key={category}
                                    category={ category }
                                />
                    })
                }
            </ol>
    </>
    )
}

