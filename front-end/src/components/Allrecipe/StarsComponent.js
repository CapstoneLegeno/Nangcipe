import styled from "styled-components";

const ActiveStar = styled.div`
  background: yellow;
  width: 20%;
  height: 10px;
  border: solid 1px;
`;

const DisActiveStart = styled.div`
          width: 20%;
          height: 10px;
          border: solid 1px;
`;

export default function StarsComopnent(props) {
 return (props.star ? <ActiveStar /> : <DisActiveStart />)
}
