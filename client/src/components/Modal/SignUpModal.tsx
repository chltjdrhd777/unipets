import React from "react";
import { Backdrop } from "./index";
import { useForm } from "hooks/useForm";

function Index({ setSignupOpen }: { setSignupOpen: Function }) {
  const form = useForm({
    email: "",
    password: "",
    nickname: "",
  });

  return <Backdrop onClick={() => setSignupOpen(false)} />;
}

export default Index;
