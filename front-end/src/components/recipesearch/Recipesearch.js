import React, { useState, useEffect } from 'react';

// import styled from 'styled-components';
import axios from 'axios';

// const elementstyle = styled.div`

// `
const RecipeList = () => {
    const [search, setSearch] = useState("");
    const [lists, setLists] = useState([]);
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
                        placeholder="조회할 레시피를 입력하세요."
                        onChange={onChangeSearch} /> 
                <button type='submit'>조회</button>
                    
            </form>
        </div>
    )
    

}





export default RecipeList;