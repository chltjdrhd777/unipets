import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";
import { BaseButton } from "components/Button";
import { useLocation } from "react-router-dom";
import RendingContent from "./RendingContent";
import { Media } from "./RendingContent";

function Index() {
  const { pathname } = useLocation();

  const headerContent = () => {
    switch (pathname) {
      case "/":
        return <RendingContent />;

      default:
        return <div>hihihi</div>;
    }
  };

  return <HeaderContainer>{headerContent()}</HeaderContainer>;
}

const HeaderContainer = styled.header`
  min-width: 100vw;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-weight: 700;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.985);

  ${Media}
`;

export default Index;
