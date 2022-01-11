import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";
import { BaseButton } from "components/Button";
import SignInModal from "components/Modal/SignInModal";
import SignUpModal from "components/Modal/SignUpModal";

function Index() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      {loginOpen && <SignInModal setLoginOpen={setLoginOpen} />}
      {signupOpen && <SignUpModal setSignupOpen={setSignupOpen} />}

      <LogoContainer>
        <Logo width="45px" height="45px" />
        <div className="logo-text">우니부니</div>
      </LogoContainer>

      <BtnContainer>
        <BaseButton className="login-btn" onClick={() => setLoginOpen(true)}>
          로그인
        </BaseButton>
        <BaseButton className="signup-btn" onClick={() => setSignupOpen(true)}>
          회원가입
        </BaseButton>
      </BtnContainer>
    </>
  );
}

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

export const Media = css`
  ${({ theme }) => theme.makeMedia(400, "down")} {
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
export default Index;
