import { FaTrash } from 'react-icons/fa'
import StarRating from './StarRating'
import { useColors } from './color-hooks';
export default function Color({ id, title, color, rating,}) {
    const { removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating 
                selectedStars={rating}
                colorId={id}
            />
        </section>
    );
}