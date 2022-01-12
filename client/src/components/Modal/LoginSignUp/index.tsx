import { AuthContext } from "components/Header";
import React, { useContext } from "react";
import BaseModal from "components/Modal";
import LoginContent from "./LoginContent";
import SignupContent from "./SignupContent";

function LoginSignUp() {
  const {
    authModalOpen: { type },
    setAuthModalOpen,
  } = useContext(AuthContext);

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
