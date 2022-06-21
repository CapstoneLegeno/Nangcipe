import React, { useState, useEffect } from 'react';
/////////////////
// import React from "react";
import FoodCard from "./FoodCard.js";
import category from "../../assets/images/category.png"
import "./style.css";
////////////////

// import styled from 'styled-components';
import axios from 'axios';

// const elementstyle = styled.div`

// `
const RecipeList = () => {
    const [search, setSearch] = useState("");
    const [lists, setLists] = useState([]);

    ////////////////////////////////////////////////
    const allrecipe = [
        {
          name: "김치찌개",
          imgSrc:
            "https://www.ummakitchen.com/wp-content/uploads/2021/07/4fa28c_30d9292ad4e74a11b7cd1c85e21175cfmv2.jpg",
          star: 5,
        },
        {
            name: "돼지고기 김치볶음밥",
            imgSrc:
              "https://w.namu.la/s/32b66f77ef969034adcbce3840d362f66470c1ade8b3b67e9859954467a61a77ffe24051fd4db50a6a5251acd242a9140df6fc120653c85407c5508b00e763d896912291b590dabebf2f40b5b486bb4697942dd85567831ca90d841040d6373640294143ea466634373be3b7ae5600cb",
            star: 4,
          },
          {
            name: "돼지고기 부대찌개",
            imgSrc:
              "http://pds27.egloos.com/pds/201308/20/32/f0035432_5212e52677bfb.jpg",
            star: 4,
          },
      ];
    ////////////////////////////////////////////////
    // const router = useRouter();

    // useEffect(() => {
    //     const recipeData = async () => {
    //         await axios.post("http://localhost:3001/recipe/search", {
    //             ingrdients: ""
    //         }).then((res) => {
    //             console.log(res)
    //         }).catch((err) => {;
    //             console.log(err);
    //         })
    //     };
    //     recipeData();
    // }, [])

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    
    const onSearch = async (e) => {
        e.preventDefault();
        if(search === null || search === '') {
            return 
        }
            let inputData = search.split(', ').sort();

            const res = await fetch("http://localhost:3001/recipe/search",{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ingredients: inputData
                })
            })
            const data = await res.json()
            console.log(data);
            // const filterData = lists.filter((row) => row.recipe.include)
        
    }
    
    
    return(
        <div className='recipesearch'>
            <form onSubmit={e => onSearch(e)}>
                <input type={"text"}
                        className={"input-sm"}
                        size={"30"}
                        value={search}
                        // placeholder="조회할 레시피를 입력하세요."
                        placeholder="돼지고기, 김치, 소금, 간장"

                        onChange={onChangeSearch} /> 
                <button type='submit'>조회</button>
                    
            </form>
            <div className="allrecipe">
                {allrecipe.map((data) => (
                <FoodCard name={data.name} imgSrc={data.imgSrc} star={data.star} />))}
            </div>
        </div>
        
    )

}

    <>
    {/* <header className="header">
      <button className="categry-btn">
        <img className="category-img" src={category} onClick={()=>{}}/>
    </button>
    </header>
    <aside className="content-header">평점 높은순</aside> */}
    

      </>


export default RecipeList;