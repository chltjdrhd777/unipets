import React from "react";
import { Backdrop } from "./index";
import { useForm } from "hooks/useForm";

function Index({ setLoginOpen }: { setLoginOpen: Function }) {
  const form = useForm({
    email: "",
    password: "",
  });

  console.log(form);
  return (
    <>
      <Backdrop onClick={() => setLoginOpen(false)} />
    </>
  );
}

export default Index;
