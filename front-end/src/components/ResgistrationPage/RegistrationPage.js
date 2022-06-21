import React, { useState } from "react";
import Registration from "./Registration";
import "./style.css";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Result = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius : 5px;
  font-weight: bold;
  padding : 10px;
  
`;

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
        {
          name: "배",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/305/305326.png",
        },
        {
          name: "귤",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/2578/2578736.png",
        },
        {
          name: "자두",
          imgSrc:
            "https://cdn-icons-png.flaticon.com/128/3309/3309568.png",
        },
        {
          name: "딸기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/590/590685.png",
        },
        {
          name: "수박",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3860/3860174.png",
        },
        {
          name: "멜론",
          imgSrc:
            "https://cdn-icons.flaticon.com/png/128/4056/premium/4056979.png?token=exp=1654416100~hmac=2df92235229bd62261845018bc93e27e",
        },
        {
          name: "토마토",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/5280/premium/5280911.png?token=exp=1654416132~hmac=47fb7376a342bdcdb296e23f533c7646",
        },
        {
          name: "바나나",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/680/680935.png",
        },
        {
          name: "블루베리",
          imgSrc:
            "https://cdn-icons-png.flaticon.com/128/6568/6568968.png",
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
        {
          name: "상추",
          imgSrc:
            "https://cdn-icons-png.flaticon.com/128/6121/6121633.png",
        },
        {
          name: "브로콜리",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/680/680956.png",
        },
        {
          name: "아욱",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1407/1407649.png",
        },
        {
          name: "고추",
          imgSrc:
            "https://cdn-icons.flaticon.com/png/128/3983/premium/3983540.png?token=exp=1654416972~hmac=4514965f19ad1dc9e847794fc02e71ee",
        },
        {
          name: "오이",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4895/premium/4895384.png?token=exp=1654417000~hmac=eea250cd737de5bf6d9d99ff490fa46c",
        },
        {
          name: "무",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/676/premium/676409.png?token=exp=1654417015~hmac=718cddaed999c0eb5bb22a41006c6531",
        },
        {
          name: "콩나물",
          imgSrc:
            "https://cdn-icons-png.flaticon.com/128/7217/7217828.png",
        },
        {
          name: "호박",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/589/589793.png",
        },
        {
          name: "버섯",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/263/263837.png",
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
        {
          name: "양고기",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/2711/premium/2711858.png?token=exp=1654416735~hmac=b2ea93c33ca76676d8bd54c810a880bd",
        },
        {
          name: "말고기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/371/371919.png",
        },
        {
          name: "오리고기",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/2636/2636434.png",
        },
      ],
    },
    {
      title: "해산물",
      data: [
        {
          name: "고등어",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/2195/premium/2195346.png?token=exp=1654416564~hmac=2cbce8e18a5cc27d9098d2ab65889b1e",
        },
        {
          name: "참치",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1728/1728753.png",
        },
        {
          name: "조개",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/3162/premium/3162113.png?token=exp=1654416609~hmac=2c3f0910eb4025d4bc6ba6cdd88b4922",
        },
        {
          name: "홍합",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4391/premium/4391736.png?token=exp=1654416637~hmac=131c905a29e8e6728c0ecdde0c75d87e",
        },
        {
          name: "새우",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/859/premium/859344.png?token=exp=1654416659~hmac=bb845ebd79403d82be296d7e4ecb4149",
        },
        {
          name: "오징어",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/616/616495.png",
        },
        {
          name: "문어",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1998/1998728.png",
        },
        {
          name: "성게",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4381/premium/4381911.png?token=exp=1654417260~hmac=26f6509ff58b85506edd890cbc38592d",
        },
        {
          name: "해삼",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/3751/premium/3751211.png?token=exp=1654417275~hmac=44f42ebca03e627492e79eff8b93744d",
        },
        {
          name: "굴",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3823/3823304.png",
        },
        {
          name: "꽃게",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/2931/premium/2931496.png?token=exp=1654417298~hmac=80a625e0def7d57e57a51fd17ea12cb8",
        },
        {
          name: "연어",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4809/premium/4809697.png?token=exp=1654417312~hmac=9e06548ec63ee60115386f6077b1b4fe",
        },
      ],
    },
    {
      title: "견과류",
      data: [
        {
          name: "아몬드",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/2224/2224240.png",
        },
        {
          name: "헤이즐넛",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/244/244306.png",
        },
        {
          name: "도토리",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/2227/2227396.png",
        },
        {
          name: "호두",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1728/1728755.png",
        },
        {
          name: "잣",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/5501/5501310.png",
        },
        {
          name: "마카다미아",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/5501/5501243.png",
        },
      ],
    },
    {
      title: "빵/떡",
      data: [
        {
          name: "바게트",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1256/1256421.png",
        },
        {
          name: "베이글",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1056/1056713.png",
        },
        {
          name: "식빵",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/3280/premium/3280077.png?token=exp=1654417637~hmac=1a54355980398cff6dab11fba11a0920",
        },
        {
          name: "크루아상",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4354/premium/4354065.png?token=exp=1654417671~hmac=68813e79a1f68c3abeb2f199f7afcb1d",
        },
        {
          name: "프레첼",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3348/3348033.png",
        },
        {
          name: "도넛",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1041/1041345.png",
        },
        {
          name: "쌀떡",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_dduk1.png",
        },
        {
          name: "밀떡",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_dduk5.png",
        },
        {
          name: "치즈떡",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_dduk14.png",
        },
        {
          name: "고구마떡",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_dduk15.png",
        },
        {
          name: "가래떡",
          imgSrc: "https://mblogthumb-phinf.pstatic.net/20160921_159/smcsky_webzine_1474425003961BFECH_PNG/%B0%A1%B7%A1%B6%B1.png?type=w800",
        },
        {
          name: "인절미",
          imgSrc: "http://nambuja.cafe24.com/wp-content/uploads/2016/04/%EA%B7%97%EB%80%AB_%EB%A3%8C%EA%BC%AF_%EB%93%84%EA%BC%A5_%E2%95%87%EA%BC%A7_%CE%B1%EB%84%A7_%EB%9A%A1%EB%80%BF__20160314-_MG_0698-%EB%B3%B5%EC%82%AC.png",
        },
      ],
    },
    {
      title: "면",
      data: [
        {
          name: "라면",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_noodle1.png",
        },
        {
          name: "쫄면",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_noodle2.png",
        },
        {
          name: "중국당면",
          imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QOLDvFCD5aCcbemQIroPg2-Hqb8nt1VLeQ&usqp=CAU",
        },
        {
          name: "분모자 당면",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_noodle8.png",
        },
        {
          name: "납작당면",
          imgSrc: "https://www.dookki.co.kr/images/pc/menu/self_noodle7.png",
        },
        {
          name: "소면",
          imgSrc: "https://cdn.imweb.me/thumbnail/20210204/45a352e004e36.png",
        },
      ],
    },
    {
      title: "가공/유제품",
      data: [
        {
          name: "참치통조림",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/385/385149.png",
        },
        {
          name: "닭가슴살통조림",
          imgSrc: "http://image.auction.co.kr/itemimage/1a/d4/2d/1ad42d3f26.jpg",
        },
        {
          name: "오징어젓갈",
          imgSrc: "http://image.auction.co.kr/itemimage/11/33/d8/1133d81871.jpg",
        },
        {
          name: "잼",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/1047/premium/1047456.png?token=exp=1654419387~hmac=892c71e431734688e5a7d79b988bf0d4",
        },
        {
          name: "만두",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/4498/4498672.png",
        },
        {
          name: "소세지",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3082/3082035.png",
        },
        {
          name: "햄",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3714/3714104.png",
        },
        {
          name: "김치",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/4727/4727309.png",
        },
        {
          name: "어묵",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/4480/premium/4480721.png?token=exp=1654419659~hmac=83ea6d84c375a074d4438bde2ef0f108",
        },
        {
          name: "우유",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/751/751682.png",
        },
        {
          name: "버터",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/859/premium/859350.png?token=exp=1654419821~hmac=d27e3c9a1c3e47311fe58cbc8be604fb",
        },
        {
          name: "치즈",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/819/premium/819827.png?token=exp=1654419834~hmac=5460191a00e0abaa871bae3fe3ad83bf",
        },
      ],
    },
    {
      title: "조미료/양념",
      data: [
        {
          name: "설탕",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/2315/premium/2315923.png?token=exp=1654419886~hmac=0d64ced6e1b9c05b25d2705dc1bb835a",
        },
        {
          name: "소금",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/3387/premium/3387389.png?token=exp=1654420046~hmac=6181019419aeb12875f642a8ce7460ce",
        },
        {
          name: "후추",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/877/877815.png",
        },
        {
          name: "참기름",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/3878/premium/3878402.png?token=exp=1654420071~hmac=7f66c5f44cf14e2783079c0c53d1f83b",
        },
        {
          name: "간장",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1471/1471433.png",
        },
        {
          name: "식초",
          imgSrc: "https://cdn-icons.flaticon.com/png/128/2732/premium/2732111.png?token=exp=1654420125~hmac=25a9bb00d57e65ebee245d0ccccb2ece",
        },
        {
          name: "다시다",
          imgSrc: "https://www.costco.co.kr/medias/sys_master/images/hba/he0/12597775466526.jpg",
        },
        {
          name: "고추가루",
          imgSrc: "https://www.bgw.kr/wp-content/uploads/2019/12/%EA%B3%A0%EC%B6%A7%EA%B0%80%EB%A3%A8.png",
        },
        {
          name: "꿀",
          imgSrc: "https://cdn-icons-png.flaticon.com/128/5900/5900553.png",
        },
        {
          name: "고추장",
          imgSrc: "https://www.costco.co.kr/medias/sys_master/images/h09/h58/27163912208414.jpg",
        },
        {
          name: "된장",
          imgSrc: "http://img.cjthemarket.com/images/file/product/074/20200810104252004.jpg",
        },
        {
          name: "쌈장",
          imgSrc: "http://img.cjthemarket.com/images/file/product/857/20191231135837376.jpg",
        },
        {
          name: "굴소스",
          imgSrc: "https://www.newiki.net/w/images/thumb/6/69/Lee_kum_kee_panda_oyster_sauce.jpg/300px-Lee_kum_kee_panda_oyster_sauce.jpg",
        },
        {
          name: "불닭소스",
          imgSrc: "http://img.danawa.com/prod_img/500000/524/217/img/7217524_1.jpg?shrink=330:330&_v=20190212140229",
        },
        {
          name: "초고추장",
          imgSrc: "http://img.danawa.com/prod_img/500000/182/478/img/4478182_1.jpg?shrink=330:330&_v=20180124164921",
        },
      ],
    },
  ];

  const [list, setList] = useState([])

  const onClick = (name, isClick) => 
  {
  
    if(!isClick) return setList([...list, name])


    const filterList  = list.filter((item)=> item != name )
    setList(filterList)
  }

  const temp = () => {
    alert(`${list.join(' ')}, 재료가 등록되었습니다`)
  }

    return (
      <>
      {datas.map((data) => {
        return <Registration title={data.title} data={data.data} key={data.title} onClickItem={onClick}/>
      })}
      <Result>{list.join('       ')}</Result>
      <hr/>
      <Link to={'/'}>
        <Button className="listbtn" onClick={temp} variant="contained" fullWidth>
                확인
        </Button>
      </Link>
      
      </>
    )
}

export default RagistrationPage;
