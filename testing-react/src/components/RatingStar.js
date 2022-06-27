import React,{useState} from "react";
import {FaStar} from "react-icons/fa";

const Showstar = ({select= false,onSelect=f=>f})=>{
    return (
        <FaStar color={select ? "red" : "grey"} onClick={onSelect} />
    )
}
const Starlength = starlength => [...Array(starlength)]

const RatingStar = ({style={},def=5,...props})=>{
    const [star,setstar] = useState(0);
    return (
        <div style={{padding : "25px",...style}}{...props}>
            {Starlength(def).map((value,key)=>{
                return (
                    <Showstar key={key} onSelect={()=>setstar(key+1)} select={star > key}/>
                )
            })}
            <p>{star} of {def} stars</p>
        </div>
    )
}
export default RatingStar;
