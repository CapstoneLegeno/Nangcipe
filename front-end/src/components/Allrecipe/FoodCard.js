import StarsComopnent from "./StarsComponent.js";

export default function FoodCard(props) {
  const stars = [0, 0, 0, 0, 0];
  for (let index = 0; index < props.star; index++) {
    stars[index] += 1;
  }
  const starsComopnents = stars.map((star) => <StarsComopnent star={star} />);
  return (
    <div className="allrecipe">
      <img className="foodimge" src={props.imgSrc} alt="" />
      <div className="allrecipe_content">
        <strong className="foodname">{props.name}</strong>
        <p className="star">{starsComopnents}</p>
      </div>
    </div>
  );
}
