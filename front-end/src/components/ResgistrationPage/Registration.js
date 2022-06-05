import Iingredients from "./Iingredients";

export default function Registration(props) {


  return (
    <>
      <h2>{props.title}</h2>
      <div className="registration">
        {props.data.map((food) => {
          return <Iingredients name={food.name} imgSrc={food.imgSrc} onClickItem={props.onClickItem} />;
        })}
        <hr />
      </div>
    </>
  );
  // return (
  //     <재료이름과목록이있는컴포넌트 title={재료컴포넌트} data={data}/>
  //     <재료이름과목록이있는컴포넌트 title={} data={}/>
  //     <재료이름과목록이있는컴포넌트 title={} data={}/>
  //     <재료이름과목록이있는컴포넌트 title={} data={}/>
  //     )
}
