import React from "react";
import { BaseBackdrop } from "./index";
import { useForm } from "hooks/useForm";
import SignUpModal from ".";

function Index({ setSignupOpen }: { setSignupOpen: Function }) {
  const form = useForm({
    email: "",
    password: "",
    nickname: "",
  });

  return (
    <>
      <SignUpModal openHandler={setSignupOpen}>hello</SignUpModal>
    </>
  );
}

export default Index;
