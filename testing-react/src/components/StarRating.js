import React from './RatingStar';
import {FaStar} from "react-icons/fa";

const StarRating= ({setrating=5,rating=0,onRate})=>{
    return (
        <div>
            {changeArr(setrating).map((star,index)=>{
                return (
                    <Star key={index} rate={rating > index} onRate={()=>onRate(index+1)}/>
                )
            })}
        </div>
    )
}
const changeArr = len => [...Array(len)]
const Star = ({rate=false,onRate})=>{
    return (
        <FaStar color={rate ? 'red': 'grey'} onClick={onRate}/>
    )
}
export default StarRating