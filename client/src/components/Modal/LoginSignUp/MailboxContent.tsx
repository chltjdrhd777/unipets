import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MainLogo } from "assets/images/logo/main.svg";
import { mailcode } from "redux/ajax/auth/mailcode";
import { useDispatch } from "react-redux";

function Index({ submitValues }: any) {
  const dispatch = useDispatch();

  const [code, setCode] = useState("");
  const [submitState, setSubmitState] = useState({
    status: "loading",
  });

  const onHandleCodeSubmit = async () => {
    if (submitState.status === "pending") {
      return;
    }

    setSubmitState({ status: "pending" });
    try {
      delete submitValues?.password;
      submitValues["code"] = code;
      const response = await dispatch(mailcode(submitValues)).unwrap();
      console.log(response, "from component");
    } catch (err) {
      console.log(err, "from component");
    }
  };

  return (
    <Section className="flex-center-C">
      <div className="logo">
        <MainLogo />
      </div>

      <div className="notion flex-center-C">
        <h3>해당하는 메일로 이메일을 보냈습니다</h3>
        <p>회원가입을 완료하기 위해 이메일에 있는 코드를 입력해주세요</p>
      </div>

      <form className="code-form flex-center-R" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="numberCode"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          maxLength={15}
        />
        <button onClick={onHandleCodeSubmit}>인증하기</button>
      </form>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;

  & .logo {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    & svg {
      width: 7rem;
      height: 7rem;
    }
  }

  & .notion {
    width: 100%;
    & h3 {
      margin-bottom: 1rem;
    }
    & p {
      word-break: keep-all;
      text-align: center;
    }
  }

  & .code-form {
    width: 100%;
    height: 3rem;
    gap: 2rem;
    margin-top: 3rem;

    & input {
      height: 100%;
      border: 1px solid ${({ theme }) => theme.colors.pointBlue};
      border-radius: 1rem;
      padding: 2rem;
      font-size: 1.5rem;
      text-align: center;
    }

    & button {
      padding: 1rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: white;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export default Index;
