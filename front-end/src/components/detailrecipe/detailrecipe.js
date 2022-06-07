import React from 'react';
import { useParams } from "react-router-dom";
import StarsComopnent from '../Allrecipe/StarsComponent';
import styled from "styled-components";

const Container = styled.div`
    padding-top: 10px;
    width: 100vw;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Star = styled.div`
    width: 30%;
`

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
`
const ImgSrc = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;
`

const Content = styled.div`
    width: 100%;
`

const Ingredients = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-evenly;
    height: 30%;
    border-bottom: 1px solid #c4c4c4;
`

const Ingredient = styled.div`
    width: 30%;
`

const Sauce = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-evenly;
    height: 30%;
    border-bottom: 1px solid #c4c4c4;
`

const Sa = styled.div`
    width: 30%;
`

const Recipe = styled.div`
    width: 80%;
    height: 30%;
`

function Detailrecipe(){

    const recipeDetail = {
        '김치찌개':{
            imgSrc: "https://www.ummakitchen.com/wp-content/uploads/2021/07/4fa28c_30d9292ad4e74a11b7cd1c85e21175cfmv2.jpg",
            description: '우리의 오래된 소울 푸드',
            star: '5',
            ingredients: 
                [
                    {
                        name: "김치",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/4727/4727309.png",
                      },
                    {
                        name: "돼지고기",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/776/776450.png",
                      },
                      {
                        name: "고추",
                        imgSrc:
                          "https://cdn-icons.flaticon.com/png/128/3983/premium/3983540.png?token=exp=1654416972~hmac=4514965f19ad1dc9e847794fc02e71ee",
                      },
                ]
            ,
            sauce: [ 
                 {
                name: "간장",
                imgSrc: "https://cdn-icons-png.flaticon.com/128/1471/1471433.png",
              }, 
              {
                name: "소금",
                imgSrc: "https://cdn-icons.flaticon.com/png/128/3387/premium/3387389.png?token=exp=1654420046~hmac=6181019419aeb12875f642a8ce7460ce",
              },
              {
                name: "설탕",
                imgSrc: "https://cdn-icons.flaticon.com/png/128/2315/premium/2315923.png?token=exp=1654419886~hmac=0d64ced6e1b9c05b25d2705dc1bb835a",
              },
            ],
            recipes:['1. 돼지고기를 먹기 좋은 크기로 썰고, 대파와 김치를 송송 썰어주세요', 
                     '2. 냄비에 기름을 두르고 김치를 볶아주세요.',
                     '3. 다진마늘 한 스푼, 설탕 한 스푼 넣어주세요.',
                     '4. 물 8컵을 냄비에 넣고 센불에 끓여주세요.',
                     '5. 돼지고기를 넣고 필요에 따라 된장을 넣어주면 잡내제거에 도움이 됩니다.',
                     '6. 양파, 고추를 썰어서 넣고 간장 두 스푼과 고춧가루 두 스푼 넣어주세요.',
                     '7. 오래 끓이다가 파를 송송 썰어서 넣어주세요.'],
        },
        '닭볶음탕':{
           
            imgSrc: "https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg&convert=jpgmin&rt=600",
            description: '어머니의 손맛이 느껴지는 맛있는 닭볶음요리',
            star: '5',
            ingredients: 
                [
                    {
                        name: "닭고기",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/1864/1864499.png",
                      },
                      {
                        name: "당근",
                        imgSrc:
                          "https://cdn-icons.flaticon.com/png/128/2276/premium/2276656.png?token=exp=1652701504~hmac=c0b306d73419c73482951c6b62818939",
                      },
                      {
                        name: "고추",
                        imgSrc:
                          "https://cdn-icons.flaticon.com/png/128/3983/premium/3983540.png?token=exp=1654416972~hmac=4514965f19ad1dc9e847794fc02e71ee",
                      },
                ]
            ,
            sauce: [ 
                 {
                name: "간장",
                imgSrc: "https://cdn-icons-png.flaticon.com/128/1471/1471433.png",
              }, 
              {
                name: "소금",
                imgSrc: "https://cdn-icons.flaticon.com/png/128/3387/premium/3387389.png?token=exp=1654420046~hmac=6181019419aeb12875f642a8ce7460ce",
              },
              {
                name: "설탕",
                imgSrc: "https://cdn-icons.flaticon.com/png/128/2315/premium/2315923.png?token=exp=1654419886~hmac=0d64ced6e1b9c05b25d2705dc1bb835a",
              },
            ],
            recipes:['1. 닭은 껍데기에 지방이 거의 다 붙어있기때문에 지방 섭취하기가 꺼려지는분들은 미리 닭껍질을 손질해서 준비해주세요.', 
                     '2. 손질된닭이 푹 잠길만큼 우유를 부어주어요. 숙성과 잡내를 제거하기 위함이에요~ 이렇게 우유에 30분정도 담궈두면 냄새도 안나고, 육질도 엄청 부드러워지거든요^^',
                     '3. 30분후 물에 여러번 헹궈내고, 닭이 잠길만큼의 물을 부어 설탕3큰술을 함께넣고 끓여주어요.',
                     '4. 감자는 크게 썷고, 양파, 버섯, 당근은 먹기 좋게 썰고, 고추는 어슷썰어 준비합니다.',
                     '5. 오래 익혀야하는 감자를 제일 먼저 넣어주고, 다진마늘2큰술도 넣어주고, 양파도 넣어줍니다.',
                     '6. 당근을 넣고 국물이 끓으면 간장 1국자반을 넣어줍니다.',
                     '7. 칼칼하게 매운맛을 내기위해 고추가루도 1국자 넣어줍니다.',
                     '8. 고추가루가 풀어지면 버섯도 추가합니다.',
                     '9. 약한 불에 5분간 끓여주고 마지막에 파와 청양고추를 넣어줍니다.'],
        }
    }

    // name: "사과",
    // imgSrc: "https://cdn-icons-png.flaticon.com/128/415/415682.png",
    const createStart = (star) =>{
        const stars = [0, 0, 0, 0, 0];
        for (let index = 0; index < star; index++) {
          stars[index] += 1;
        }
        return stars
    }    

  
    let params = useParams();
    console.log(params)
    const { imgSrc, description, star, ingredients, sauce, recipes} = recipeDetail[params.recipe]
  
    console.log(imgSrc)

 
    return(
        <Container>
            <Header>
        <ImgSrc src={imgSrc} />
        <h1>{params.recipe}</h1>
        <p>{description}</p>
        <Star>
          {createStart(star).map((star,idx) => <StarsComopnent key={idx} star={star} />)}
          </Star>
          </Header>
          <Content>
          <h1>재료</h1>
        <Ingredients>
        
        {ingredients.map(({name, imgSrc})=> {
            return (
                <Ingredient>
                <img src={imgSrc} alt="대체이미지"/>
                <p>{name}</p>
                </Ingredient>
            )
        })}
        </Ingredients>
         <h1>조미료</h1>
         <Sauce>
        {sauce.map(({name, imgSrc})=> {
            return (
                <Sa>
                <img src={imgSrc} alt="대체이미지"/>
                <p>{name}</p>
                </Sa>
            )
        })}
        </Sauce>
         <h1>레시피</h1>
         <Recipe>
        {recipes.map((recipe)=> {
            return <p>{recipe}</p>
        })}
        </Recipe>
         </Content>
        </Container>
    )
}

export default Detailrecipe;