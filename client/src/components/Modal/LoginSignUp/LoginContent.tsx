import React from "react";
import styled from "styled-components";
import { useForm } from "hooks/useForm";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";
import { Link } from "react-router-dom";

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

      <div className="btn-container flex-center-C">
        <button className="login-btn">로그인</button>
        <p>또는</p>
        <button className="googleBtn">구글로 계속하기</button>
        <button className="googleBtn">카카오로 계속하기</button>
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

    & button {
      width: 65%;
      height: 4rem;
      border-radius: 4rem;

      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      color: white;

      &.login-btn {
        background-color: ${({ theme }) => theme.colors.mainColor};
        &:hover {
          background-color: ${({ theme }) => theme.colors.pointBlue};
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
