import React from "react";
import styled from "styled-components/macro";
import Header from "components/Header";

function Home() {
  return (
    <HomeContainer>
      <Header />
      home landing page
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TextBox />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
`;

const TextBox = styled.div`
  background-color: #555bff;
  width: 100%;
  height: 500px;
`;

export default Home;
