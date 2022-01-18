import { AuthContext } from "components/Header";
import React, { useContext } from "react";
import BaseModal from "components/Modal";
import LoginContent from "./LoginContent";
import SignupContent from "./SignupContent";
import MailboxContent from "./MailboxContent";

function LoginSignUp() {
  const {
    authModalOpen: { type, options },
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
      {type === "mailbox" && <MailboxContent submitValues={options} />}
    </BaseModal>
  );
}

export default LoginSignUp;
