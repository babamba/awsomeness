import React, { Component } from 'react';
// import "./App.css";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Button success >Hello</Button>
        <Button danger rotationTime={"5"}>Hello</Button>
        <Anchor href="https://www.google.com/">Go to Google</Anchor>
      </Container>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body{
    paddingh:0;
    margin:0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width:100%;
  background-color:papayawhip ;
`;

const Button = styled.button`
  border-radius:50px;
  padding:5px;
  min-width: 200px;
  min-height: 41px;
  color:white;
  text-align: center
  font-size: 20px;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline:none;
  }
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color:${props => props.danger ? "#e74c3c" : "#2ecc71" }
  ${props => {
    if(props.danger){
      return css `animation:${rotation} ${props.rotationTime}s linear infinite`
    }
  }}
  `;

const Anchor = styled (Button.withComponent("a")) `
  text-decoration : none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export default App;
