import React from 'react'

export const GifGridItem = ({id,title,url}) => {


    return (
        <div className="animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p> { title } </p>
        </div>
    )
}
