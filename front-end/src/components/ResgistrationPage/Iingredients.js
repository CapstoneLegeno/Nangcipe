
import { useState } from "react";
import styled from "styled-components";

const Regis = styled.div`
  width: 32%;
  ${props => props.isClick ? 
    '-webkit-filter: grayscale(0%); filter : none;' : '-webkit-filter: grayscale(100%); filter : gray;'}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
    width: 100%;
`

export default function Iingredients(props) {

  const [isClick, setIsClick] = useState(false)
  
  const onClick = () => {
    setIsClick(()=>!isClick)
    props.onClickItem(props.name, isClick)
  }
  return (
    <Regis className="regis" isClick={isClick} onClick={onClick}>
      <Img className="imge" src={props.imgSrc} alt='img' />
      <strong className="regisname">{props.name}</strong>
    </Regis>
  );
}
