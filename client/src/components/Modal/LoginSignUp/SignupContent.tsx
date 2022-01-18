import React, { useContext } from "react";
import { AuthContext } from "components/Header";
import styled from "styled-components";
import { useAuthForm } from "hooks/useAuthForm";
import { oauthHelpers } from "utils/oauth";
import { ReactComponent as MainLogo } from "assets/images/logo/main.svg";
import { ReactComponent as NaverBtnIcon } from "assets/images/logo/Naver-icon.svg";
import { ReactComponent as GoogleBtnIcon } from "assets/images/logo/Google-icon.svg";
import { ReactComponent as KakaoBtnIcon } from "assets/images/logo/Kakao-icon.svg";
import { emptyChecker } from "utils/validate";

function Index() {
  const { setAuthModalOpen } = useContext(AuthContext);

  const {
    values: { email, password, nickname },
    onHandleChange,
    onHandleSignUp,
    submitState: { empty },
  } = useAuthForm({
    email: "",
    password: "",
    nickname: "",
  });

  return (
    <Section className="flex-center-C">
      <div className="logo-container">
        <MainLogo />
      </div>

      <p className="welcom-text">
        <span>우니부니</span>에 오신것을 환영합니다
      </p>

      <form className="login-form flex-center-C" onSubmit={(e) => e.preventDefault()}>
        <input
          name="email"
          type="text"
          value={email}
          onChange={({ target }) => onHandleChange(target.name, target.value)}
          placeholder="이메일"
          className={emptyChecker(empty, "email") ? "empty" : ""}
          maxLength={30}
        />
        <input
          name="password"
          type="password"
          autoComplete="on"
          value={password}
          onChange={({ target }) => onHandleChange(target.name, target.value)}
          placeholder="비밀번호"
          className={emptyChecker(empty, "password") ? "empty" : ""}
          maxLength={15}
        />

        <input
          name="nickname"
          type="text"
          value={nickname}
          onChange={({ target }) => onHandleChange(target.name, target.value)}
          placeholder="닉네임"
          className={emptyChecker(empty, "nickname") ? "empty" : ""}
          maxLength={20}
        />
      </form>

      {/* 구글, 네이버는 정식 오픈 검수요청 잊지말것 */}
      <div className="btn-container flex-center-C">
        <div
          className="btn-wrapper signup-btn flex-center-R"
          onClick={() => onHandleSignUp(setAuthModalOpen)}
        >
          <button className="signup-btn">계속하기</button>
        </div>

        <p>또는</p>

        <div className="btn-wrapper google-btn flex-center-R" onClick={oauthHelpers.googleLogin}>
          <div className="logo flex-center-R">
            <GoogleBtnIcon />
          </div>
          <button className="google-btn">Google 계정으로 계속하기</button>
        </div>

        <div className="btn-wrapper kakao-btn flex-center-R" onClick={oauthHelpers.kakaoLogin}>
          <div className="logo flex-center-R">
            <KakaoBtnIcon />
          </div>
          <button>카카오 계정으로 계속하기</button>
        </div>

        <div
          className="btn-wrapper naver-btn flex-center-R"
          onClick={() => {
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const popupWidth = 600;
            const popupHeight = 800;
            const top = screenHeight / 2 - popupHeight / 2;
            const left = screenWidth / 2 - popupWidth / 2;

            window.open(
              process.env.REACT_APP_NAVER_LOGIN_URL,
              "_blank",
              `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=yes`
            );
          }}
        >
          <div className="logo flex-center-R">
            <NaverBtnIcon />
          </div>
          <button>네이버 계정으로 계속하기</button>
        </div>
      </div>
    </Section>
  );
}

export const Section = styled.section`
  width: 100%;
  height: 100%;
  gap: 0.5rem;

  & .logo-container {
    width: 100%;
    text-align: center;
    & svg {
      width: 7rem;
      height: 7rem;
    }
  }

  & .welcom-text {
    font-size: 2.7rem;
    & span {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  & .login-form {
    width: 100%;
    margin-top: 1rem;
    gap: 1rem;

    & input {
      width: 65%;
      height: 5rem;
      border: 1px solid ${({ theme }) => theme.colors.grayThree};
      border-radius: 1.6rem;
      font-size: 1.7rem;
      padding: 2rem 1rem;

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.mainColor};
      }

      //# conditional
      &.empty,
      &.empty:focus {
        border: 2px solid ${({ theme }) => theme.colors.waringColor};
      }
    }

    & .reset-password {
      & a {
        font-size: 1.2rem;
        font-weight: bold;
      }

      &:hover a {
        text-decoration: underline;
      }
    }
  }

  & .btn-container {
    width: 100%;
    margin-top: 1rem;
    gap: 1.5rem;

    & .btn-wrapper {
      width: 65%;
      height: 4rem;
      border-radius: 4rem;
      overflow: hidden;
      justify-content: space-between;
      padding: 0 2rem;
      cursor: pointer;

      //@ childern
      & .logo > svg {
        width: 3rem;
        height: 100%;
      }

      & button {
        font-size: 1.3rem;
        color: white;
        flex: 1;
        background-color: transparent;
        cursor: pointer;
        line-height: 1;
      }

      //# design cases
      &.signup-btn {
        background-color: ${({ theme }) => theme.colors.mainColor};
        &:hover {
          background-color: ${({ theme }) => theme.colors.pointBlue};
        }
      }

      &.google-btn {
        background-color: white;
        border: 1px solid ${({ theme }) => theme.colors.grayTwo};

        & > button {
          color: black;
          font-weight: normal;
        }
      }

      &.kakao-btn {
        background-color: #fee500;
        & > button {
          color: #000;
        }
      }

      &.naver-btn {
        background-color: #03c75a;
        & > button {
          color: white;
        }
      }
    }

    & p {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export interface SubmitValues {
  email: string;
  nickname: string;
  password: string;
}

export default Index;
