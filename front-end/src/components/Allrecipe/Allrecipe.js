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
      name: "닭볶음탕",
      imgSrc:
        "https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600",
      star: 5,
    },
    {
      name: "투움바 파스타",
      imgSrc: "https://t1.daumcdn.net/cfile/tistory/992AEB485F91412124",
      star: 3,
    },
    {
      name: "치즈그라탕",
      imgSrc: "https://recipe1.ezmember.co.kr/cache/recipe/2019/07/03/815047f295bbbef47af6eb942e2e324b1.jpg",
      star: 3,
    },
    {
      name: "해물탕",
      imgSrc:
        "http://image.auction.co.kr/itemimage/21/88/bd/2188bd3296.jpg",
      star: 2,
    },
    {
      name: "짜장면",
      imgSrc:
        "https://recipe1.ezmember.co.kr/cache/recipe/2020/06/04/d96e1e81ecc8d86c922d486ec6eec4da1.jpg",
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
