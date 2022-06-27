import React from 'react';
import StarRating from './StarRating'
import {FaTrash} from "react-icons/fa";

const Color = ({id,title,color,rating,onRemove,onRate})=>{
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=>onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height : 50, backgroundColor:color}}/>
            <StarRating rating={rating} onRate={rating=> onRate(id,rating)}/>
        </div>
    )
}
export default Color;