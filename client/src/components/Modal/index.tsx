import React from "react";
import styled from "styled-components";

function Index() {
  return <div></div>;
}

export const ModalContainer = styled.div``;

export const Backdrop = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 15000;
`;

export default Index;
