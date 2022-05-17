import React from 'react';
import './style.css';

function StarsComopnent(props) {
    if(props.star){
        return(
            <div style={{
                "background":"yellow",
                "width":"50px",
                "height":"50px",
                "border": "solid 1px"
            }}/>
        )
    }else{

        return(
            <div style={{
                "width":"50px",
                "height":"50px",
                "border": "solid 1px"
            }}/>
        )
    }
}
function FoodCard(props) {
    const stars = [0,0,0,0,0]
    for (let index = 0; index < props.star; index++) {
        stars[index]+=1
        
    }
    const starsComopnents = stars.map((star)=><StarsComopnent star={star}/>)
    return(
        <div className='allrecipe'>
            <img className='foodimge' src={props.imgSrc} alt=""/>
            <div className='allrecipe_content'>
            <strong className='foodname'>{props.name}</strong>
            <p className='star'>{starsComopnents}</p>
            </div>
            
        </div>
    )
}

function Allrecipe(){
    const datas=
        [
                        {
                            name:"김치찌개",
                            imgSrc:"https://agenery14.com/data/item/1611067564/thumb-6rmA7LCM_1000x1000.jpg",
                            star:5
                        },
                        {
                            name:"투움바 파스타",
                            imgSrc:"https://t1.daumcdn.net/cfile/tistory/992AEB485F91412124",
                            star:3
                        },
                        {
                            name:"해물탕",
                            imgSrc:"https://m.365kki.com/data/goods/20/09/39/1000000249/1000000249_detail_024.jpg",
                            star:2
                        }
        ]
    const foodList = datas.map((data)=><FoodCard name={data.name} imgSrc={data.imgSrc} star={data.star}/>)
    return(
        <div>
            {foodList}
        </div>
    )
}

export default Allrecipe;

