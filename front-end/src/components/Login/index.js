import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import styled, {keyframes} from "styled-components";
import "./style.css";


export default function Login() {
 
    const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
    let navigate = useNavigate();
    useEffect(()=>{
       
        (async function(){
            await wait(5000)

            navigate("/");
        })()

    })

  return (
    <div className="spinner"></div>
  )
}
