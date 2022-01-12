import React, { PropsWithChildren } from "react";
import styled from "styled-components";

function Index({
  openHandler,
  children,
}: PropsWithChildren<{ openHandler: React.SetStateAction<any> }>) {
  return (
    <>
      <BaseModalContent className="flex-center-C">
        <i className="fas fa-times close" onClick={openHandler}></i>
        {children}
      </BaseModalContent>
      <BaseBackdrop onClick={openHandler} />
    </>
  );
}

export const BaseModalContent = styled.dialog`
  width: 35%;
  min-width: 48rem;
  height: 60%;
  min-height: 68rem;

  border: none;
  border-radius: 3.2rem;
  background-color: white;
  padding: 2rem 1rem;

  position: fixed;
  z-index: 20000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & i[class~="close"] {
    font-size: 3rem;
    position: absolute;
    top: 2rem;
    right: 2.2rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.pointBlue};
    }
  }

  @media screen and (max-width: 500px) {
    width: 85%;
    height: 75%;
    min-width: 0rem;
    min-height: 0rem;

    & i[class~="close"] {
      font-size: 2.5rem;
      position: absolute;
      top: 1.7rem;
      right: 2rem;
      cursor: pointer;
    }
  }
`;

export const BaseBackdrop = styled.div`
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
