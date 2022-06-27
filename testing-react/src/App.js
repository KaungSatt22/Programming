import React,{useState} from 'react'
import ColorData from './components/colordata.json'
import Colorlist from './components/colorlist'

const App = ()=> {
    const [colors,setColors] = useState(ColorData);
    const onRemoveColor = id => {
        const newColor = colors.filter(color=> color.id !== id);
        setColors(newColor)
    }
    const onRateColor = (id,rating)=>{
        const newColors = colors.map(color=>color.id === id ? {...color,rating} : color)
        setColors(newColors)
    }

    return (
        <Colorlist colors={colors} onRemoveColor={onRemoveColor} onRate={onRateColor}/>
    )
}
export default App;