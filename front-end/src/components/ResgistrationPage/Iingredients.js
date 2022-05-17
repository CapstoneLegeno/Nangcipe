export default function Iingredients(props) {
  return (
    <div className="regis">
      <img className="imge" src={props.imgSrc} />
      <strong className="regisname">{props.name}</strong>
    </div>
  );
}
