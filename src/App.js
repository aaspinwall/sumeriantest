import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className='App'>
      <div>
        <a href='https://us-east-1.sumerian.aws/e72a46f648b44037a3212b12deabd7f8.scene'>
          Scan the cat and watch it come to life
        </a>
        <a href='https://us-east-1.sumerian.aws/697c103ffb0e4bf78ea8a859bb46155f.scene'>
          Hockey Player
        </a>
      </div>

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
  a {
    display: block;
    padding-bottom: 2rem;
  }
`;

export default App;
