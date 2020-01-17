import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className='App'>
      <a href='https://us-east-1.sumerian.aws/e72a46f648b44037a3212b12deabd7f8.scene'>
        Click here to experience AR
      </a>

      {/* <iframe
        width='100%'
        height='100%'
        src='https://us-east-1.sumerian.aws/43c5562ec9e04269a9012c4e26df000d.scene'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen'
        allowfullscreen
      ></iframe> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
