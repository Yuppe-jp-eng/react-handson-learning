import { createContext, useContext, useState } from 'react'
import colorData from './color-data.json';
import { v4 } from 'uuid';

export const ColorContext = createContext();

// データ参照のためのフック(追加)
// eslint-disable-next-line react-refresh/only-export-components
export const useColors = () => useContext(ColorContext);

// データ公開のためのProvider
export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => 
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);
    const rateColor = (id, rating) => setColors(
        colors.map(color => (color.id === id) ? {...color, rating} : color)
    )
    const removeColor = id => setColors(colors.filter(color => color.id !== id));
    return (
        <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
            {children}
        </ColorContext.Provider>
    )
}