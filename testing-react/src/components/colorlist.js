import React from 'react';
import Color from './Color';

const Colorlist = ({colors=[],onRemoveColor,onRate})=>{
    return (
        <div>
            {colors.map(color=>{
                return (
                    <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRate} />
                )
            })}
        </div>
    )
}
export default Colorlist;