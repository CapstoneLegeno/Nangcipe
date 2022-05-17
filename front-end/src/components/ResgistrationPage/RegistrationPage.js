import React from "react";
import Registration from "./Registration";
import "./style.css";

function RagistrationPage() {
  const datas = [
    {
      title: "과일",
      data: [
        {
          name: "사과",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/415/415682.png",
        },
        {
          name: "포도",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/765/765634.png",
        },
        {
          name: "망고",
          imgSrc:
            "https://cdn-icons.flaticon.com/png/128/3944/premium/3944222.png?token=exp=1652611578~hmac=282d127d2a9ed8eb66677366bb7e747e",
        },
      ],
    },
    {
      title: "채소",
      data: [
        {
          name: "당근",
          imgSrc:
            "https://cdn-icons.flaticon.com/png/128/2276/premium/2276656.png?token=exp=1652701504~hmac=c0b306d73419c73482951c6b62818939",
        },
        {
          name: "양배추",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/286/286688.png",
        },
        {
          name: "피망",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/184/184418.png",
        },
      ],
    },
    {
      title: "육류",
      data: [
        {
          name: "돼지고기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/776/776450.png",
        },
        {
          name: "소고기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/616/616693.png",
        },
        {
          name: "닭고기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1864/1864499.png",
        },
      ],
    },
  ];

  const Ragistrations = datas.map((data) => {
    console.log(data, "121212");
    return (
      <Registration title={data.title} data={data.data} key={data.title} />
    );
  });
  return <>{Ragistrations}</>;
}

export default RagistrationPage;
