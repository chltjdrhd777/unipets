import React, { PropsWithChildren } from "react";
import styled from "styled-components";

function Index({}: PropsWithChildren<{}>) {
  return <div></div>;
}

export const BaseButton = styled.button`
  min-width: 6rem;
  min-height: 4rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2.4rem;
`;

export default Index;
