import StarsComopnent from "./StarsComponent.js";
import { Link } from "react-router-dom";

export default function FoodCard(props) {
  const stars = [0, 0, 0, 0, 0];
  for (let index = 0; index < props.star; index++) {
    stars[index] += 1;
  }


  return (
    <Link to={`/allrecipe/${props.name}`}>
     <div className="food-card">
        <img className="foodimge" src={props.imgSrc} alt="" />
        <div className="allrecipe_content">
          <strong className="foodname">{props.name}</strong>
          <div className="star">
          {stars.map((star,idx) => <StarsComopnent key={idx} star={star} />)}
          </div>
        </div>
    </div>
    </Link>
  );
}
