import React from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <iframe
        width='100%'
        height='100%'
        /* src='https://us-east-2.sumerian.aws/1aced70c42cb4fca874815156d76209e.scene' */
        src='https://us-east-1.sumerian.aws/43c5562ec9e04269a9012c4e26df000d.scene'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen'
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
