import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";
import LogoImg from "../../assets/images/Logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  text-align: center;
`;
// const LogoImg = styled.div`
//   width: 300px;
//   height: 300px;
//   background-color: gray;
// `
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export function MainPage() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <Container>
        <h1>냉시피를 부탁해</h1>
      </Container>
      <ButtonContainer></ButtonContainer>
      <Container>
        <Button className="loginbtn" variant="outlined">
          로그인
        </Button>
        <img
          src={LogoImg}
          width="100%"
          height="100%"
          alt="logo-img"
          fullWidth
        />

        <ButtonGroup orientation="vertical">
          <Link to={"/registration"}>
            <Button className="listbtn" variant="contained" fullWidth>
              재료추가
            </Button>
          </Link>

          <Link to={"/allrecipe"}>
            <Button className="listbtn" variant="contained" fullWidth>
              전체 레시피
            </Button>
          </Link>

          <Link to={"/favorite"}>
            <Button className="listbtn" variant="contained" fullWidth>
              즐겨찾기
            </Button>
          </Link>
        </ButtonGroup>
      </Container>
      <input
        type={"text"}
        className={"input-sm"}
        size={"25"}
        onChange={handleChange}
      ></input>
      <br />
      냉장고 속 방치되어 있는 재료 또는 사용하지 않는 재료들을 등록을 통해
      사용자에게 레시피를 추천해주는 서비스
    </div>
  );
}
