import React from "react";
import { useForm } from "hooks/useForm";
import { Section } from "./LoginContent";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/images/logo/main.svg";

function SignupContent() {
  const {
    values: { email, password, nickname },
    onHandleChange,
  } = useForm({
    email: "",
    password: "",
    nickname: "",
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

        <input
          name="nickname"
          type="text"
          value={nickname}
          onChange={({ target }) => onHandleChange(target.name, target.value)}
          placeholder="닉네임"
        />
      </form>

      <div className="btn-container flex-center-C">
        <button className="login-btn">계속하기</button>
        <p>또는</p>
        <button className="googleBtn">구글로 계속하기</button>
        <button className="googleBtn">카카오로 계속하기</button>
      </div>
    </Section>
  );
}

export default SignupContent;
