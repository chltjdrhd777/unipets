import React, { useState, createContext, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";
import { BaseButton } from "components/Button";
import LoginSignupModal from "components/Modal/LoginSignUp";

export const AuthContext = createContext<ContextProps>({
  authModalOpen: { open: false, type: "ready" },
  setAuthModalOpen: () => {},
});

function Index() {
  const { pathname } = useLocation();
  const [authModalOpen, setAuthModalOpen] = useState<AuthModalOpen>({
    open: false,
    type: "ready",
  });

  // when path === "/"
  // when path is others
  const HeaderContent = () => {
    switch (pathname) {
      case "/":
        return (
          <>
            <AuhMedia>
              <LogoContainer>
                <Logo width="45px" height="45px" />
                <h1 className="logo-text">우니부니</h1>
              </LogoContainer>

              <BtnContainer>
                <BaseButton
                  className="login-btn"
                  onClick={() => setAuthModalOpen({ open: true, type: "login" })}
                >
                  로그인
                </BaseButton>
                <BaseButton
                  className="signup-btn"
                  onClick={() => setAuthModalOpen({ open: true, type: "signup" })}
                >
                  회원가입
                </BaseButton>
              </BtnContainer>
            </AuhMedia>
          </>
        );

      default:
        return <div>hihihi</div>;
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ authModalOpen, setAuthModalOpen }}>
        {authModalOpen.open && <LoginSignupModal />}
      </AuthContext.Provider>

      {HeaderContent()}
    </>
  );
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
`;

const LogoContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & .logo-text {
    font-size: 2.2rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;

  & .login-btn {
    background-color: ${({ theme }) => theme.colors.pointBlue};
    color: white;
  }
`;

//@ media
const Media = css`
  @media screen and (max-width: 500px) {
    ${LogoContainer} {
      & .logo-text {
        font-size: 1.5rem;
      }
    }

    ${BtnContainer} {
      margin-right: 0;

      & button {
        font-size: 1rem;
        width: 5rem;
        min-width: 4rem;
        height: 3rem;
        min-height: 3rem;

        &.signup-btn {
          width: 6rem;
        }
      }
    }
  }
`;

const AuhMedia = styled(HeaderContainer)`
  ${Media}
`;

//# types
interface AuthModalOpen {
  open: boolean;
  type: "login" | "signup" | "ready" | "mailbox";
}

interface ContextProps {
  authModalOpen: AuthModalOpen;
  setAuthModalOpen: SetStateAction<any>;
}
export default Index;
