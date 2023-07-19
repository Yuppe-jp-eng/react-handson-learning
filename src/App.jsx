import './App.css'
import StarRating from './StarRating.jsx'
export default function App() {
  return <StarRating
          style={{ backGroudColor: "lightblue"}}
          onDoubleClick={ e => alert("double click")}
          />
}

