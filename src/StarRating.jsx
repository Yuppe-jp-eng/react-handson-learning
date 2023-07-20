import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false, onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "grey" } onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <div style={{ padding: "5px" }} >
    {[...Array(totalStars)].map((n,i) => (
      <Star 
        key={i} 
        selected={selectedStars > i} 
      />
    ))}
    <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )

}
