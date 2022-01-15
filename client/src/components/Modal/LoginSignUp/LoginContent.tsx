import React from "react";
import styled from "styled-components";
import { useForm } from "hooks/useForm";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";
import { Link } from "react-router-dom";
import { oauthHelpers } from "utils/oauth";
import { ReactComponent as NaverBtnLogo } from "assets/images/logo/naverBtnLogo.svg";

function Index() {
  const {
    values: { email, password },
    onHandleChange,
  } = useForm({
    email: "",
    password: "",
  });

  return (
    <Section className="flex-center-C">
      <div className="logo-container">
        <Logo />
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
        />
        <input
          name="password"
          type="text"
          value={password}
          onChange={({ target }) => onHandleChange(target.name, target.value)}
          placeholder="비밀번호"
        />

        <div className="reset-password">
          <Link to="/password/reset"> 비밀번호를 잊으셨나요?</Link>
        </div>
      </form>

      {/* 구글, 네이버는 정식 오픈 검수요청 잊지말것 */}
      <div className="btn-container flex-center-C">
        <div className="btn-wrapper login-btn flex-center-R">
          <button className="login-btn">로그인</button>
        </div>

        <p>또는</p>

        <div className="btn-wrapper google-btn flex-center-R">
          <div className="logo flex-center-R">logo</div>
          <button className="google-btn" onClick={oauthHelpers.googleLogin}>
            Google 계정으로 계속하기
          </button>
        </div>

        <div className="btn-wrapper kakao-btn flex-center-R">
          <div className="logo flex-center-R">logo</div>
          <button onClick={oauthHelpers.kakaoLogin}>카카오 계정으로 계속하기</button>
        </div>

        <div className="btn-wrapper naver-btn flex-center-R">
          <div className="logo flex-center-R">
            <NaverBtnLogo />
          </div>
          <button
            onClick={() => {
              window.open(
                "https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=VYxWDMtdyXyOms1pHNDe&state=17f11f50-4ac6-4334-9fdf-ac2b8589323e&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fnaver&version=js-2.0.1",
                "_blank",
                "height=400,width=377,top=100,left=200,scrollbars=yes,resizable=yes"
              );
            }}
          >
            네이버 계정으로 계속하기
          </button>
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
      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.mainColor};
      }

      padding: 2rem 1rem;
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
        width: 4rem;
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
      &.login-btn {
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

export default Index;
