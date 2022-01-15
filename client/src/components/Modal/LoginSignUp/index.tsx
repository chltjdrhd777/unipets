import { AuthContext } from "components/Header";
import React, { useContext, useEffect, useState } from "react";
import BaseModal from "components/Modal";
import LoginContent from "./LoginContent";
import SignupContent from "./SignupContent";

function LoginSignUp() {
  const {
    authModalOpen: { type },
    setAuthModalOpen,
  } = useContext(AuthContext);

  useEffect(() => {
    //naver
    try {
      // const naverInit = new window.naver.LoginWithNaverId({
      //   clientId: process.env.REACT_APP_NAVER_CLIENT,
      //   callbackUrl: process.env.REACT_APP_NAVER_REDIRECT,
      //   isPopup: true,
      //   loginButton: { color: "green", type: 3, height: 50 },
      // });
      // naverInit.init();
      // window.naver["naverInit"] = naverInit;
    } catch (err) {
      console.log(err, "from naver");
    }
  }, []);

  return (
    <BaseModal
      openHandler={() => {
        setAuthModalOpen({
          open: false,
          type: "ready",
        });
      }}
    >
      {type === "login" && <LoginContent />}
      {type === "signup" && <SignupContent />}
    </BaseModal>
  );
}

export default LoginSignUp;
