import React, { Component } from 'react';
// import "./App.css";
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import theme from "./theme"

class App extends Component {
  render() {
    return (
      // 리덕스 provider 처럼 전체를 감싸서 어디서든지 접근할 수 있게.
      <ThemeProvider theme = {theme} >
        <Container>
          <GlobalStyle />
            <Form />
          {/* <Input placeholder="Hello" /> */}
          {/* <Button success >Hello</Button>
          <Button danger rotationTime={"5"}>Hello</Button> */}
          {/* <Anchor href="https://www.google.com/">Go to Google</Anchor> */}
        </Container>
      </ThemeProvider>
    );
  }
}


const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);


const Card = styled.div`
  background-color:white;
`;

const Button = styled.button`
  border-radius:30px;
  padding:25px  15px;
  background-color: ${props => props.theme.successColor};
`;

//mixin 은 css그룹 내가 그룹화하고싶은 여러장소에서 쓰고싶은 것
// const awesomeCard = css`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: white;
//   border-radius:10px;
//   padding: 20px;
// `;

// attr 을 수정할 수있다.
// const Input = styled.input.attrs({
//   required: true  
// })`
//   border:none;
//   border-radius: 5px;
//   ${awesomeCard};
// `;

const Container = styled.div`
  height: 100vh;
  width:100%;
  background-color:#FFEFD5 ;

  // nesting - sass에서 보통하던 스타일안의 스타일
  ${Card}{
    background-color:blue
  }
`;


const GlobalStyle = createGlobalStyle`
  body{
    paddingh:0;
    margin:0;
  }
`;

// const Button = styled.button`
//   border-radius:50px;
//   padding:5px;
//   min-width: 200px;
//   min-height: 41px;
//   color:white;
//   text-align: center
//   font-size: 20px;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline:none;
//   }
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color:${props => props.danger ? "#e74c3c" : "#2ecc71" }
//   ${props => {
//     if(props.danger){
//       return css `animation:${rotation} ${props.rotationTime}s linear infinite`
//     }
//   }}
//   `;

// const Anchor = styled (Button.withComponent("a")) `
//   text-decoration : none;
// `;

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to{
//     transform: rotate(360deg);
//   }
// `;

export default App;
