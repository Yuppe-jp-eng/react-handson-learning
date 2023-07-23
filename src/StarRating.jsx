import { FaStar } from 'react-icons/fa'
import { useColors } from './color-hooks';

const Star = ({ selected = false, onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "grey" } onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0, colorId=0}) {
  const { rateColor } = useColors();
  return (
    <div style={{ padding: "5px" }} >
    {[...Array(totalStars)].map((n,i) => (
      <Star 
        key={i} 
        selected={selectedStars > i} 
        onSelect={() => rateColor(colorId, i+1)}
      />
    ))}
    <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )

}
