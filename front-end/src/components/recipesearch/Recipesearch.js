import React from 'react';
import styled from 'styled-components';

const elementstyle = styled.div`
    
`

function Recipesearch(){
    return(
        <div className='recipesearch'>
            <input type={"text"}
                    className={"input-sm"}
                    size={"30"}> 
            </input>
        </div>
    )
}

export default Recipesearch;