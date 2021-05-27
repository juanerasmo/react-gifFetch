import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategory }) => {

    const [inputValue, setInputValue] = useState(''); 

    const handleChange = ( e ) => {
        setInputValue( e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCategory(valor => [ inputValue, ...valor])
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategory : PropTypes.func.isRequired
}