import styled from "styled-components";
import star from '../../assets/images/star.png'
const ActiveStar = styled.img`
  width: 10%;
  height: auto;
`;

const DisActiveStart = styled.img`
    width: 10%;
    height: auto;
    -webkit-filter: grayscale(100%);
    filter : gray;
`;

export default function StarsComopnent(props) {
 return (props.star ? <ActiveStar src={star} /> : <DisActiveStart src={star}/>)
}
