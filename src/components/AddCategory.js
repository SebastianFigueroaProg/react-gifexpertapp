import React, {useState} from 'react';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState('');

    const hadlerInputChange = ( e ) =>{
        setinputValue(e.target.value);
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2) {            
            setCategories(cats=>[inputValue,...cats]);
            setinputValue('');

        }


    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ hadlerInputChange }
            />        
        </form>
    )
}
