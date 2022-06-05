import React from "react";
import FoodCard from "./FoodCard.js";
import category from "../../assets/images/category.png"
import "./style.css";

export default function Allrecipe() {
  const datas = [
    {
      name: "김치찌개",
      imgSrc:
        "https://agenery14.com/data/item/1611067564/thumb-6rmA7LCM_1000x1000.jpg",
      star: 5,
    },
    {
      name: "투움바 파스타",
      imgSrc: "https://t1.daumcdn.net/cfile/tistory/992AEB485F91412124",
      star: 3,
    },
    {
      name: "해물탕",
      imgSrc:
        "https://m.365kki.com/data/goods/20/09/39/1000000249/1000000249_detail_024.jpg",
      star: 2,
    },
    {
      name: "김치찌개",
      imgSrc:
        "https://agenery14.com/data/item/1611067564/thumb-6rmA7LCM_1000x1000.jpg",
      star: 5,
    },
    {
      name: "투움바 파스타",
      imgSrc: "https://t1.daumcdn.net/cfile/tistory/992AEB485F91412124",
      star: 3,
    },
    {
      name: "해물탕",
      imgSrc:
        "https://m.365kki.com/data/goods/20/09/39/1000000249/1000000249_detail_024.jpg",
      star: 2,
    },
  ];

  return (
    <>
    <header className="header">
      <button className="categry-btn">
        <img className="category-img" src={category} onClick={()=>{}}/>
    </button>
    </header>
    <aside className="content-header">평점 높은순</aside>
    <div className="allrecipe">
    {datas.map((data) => (
        <FoodCard name={data.name} imgSrc={data.imgSrc} star={data.star} />))}
      </div>
      </>
  )
}
