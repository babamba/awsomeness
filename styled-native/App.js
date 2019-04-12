import React from 'react';
import styled from "styled-components";

// styled-components 를 사용하면 
// import { View, Text } 요딴거 안써도됨
// 원리는 View라고 선언하면 react-native-web에서 div로 던져줌 

const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  padding: 10px 100px;
`;

const Title = styled.Text`
  font-weight:600;
  font-size:32px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>Open up App.js to start working on your app!</Title>
      </Container>
    );
  }
}
