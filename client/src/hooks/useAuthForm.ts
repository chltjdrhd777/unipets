import { SetStateAction, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "redux/ajax/auth/signup";
import { DataProps } from "redux/ajax/auth/signup";

export function useAuthForm(initialValues: any) {
  const dispatch = useDispatch();

  const [values, setValues] = useState<{ [key: string]: any }>(initialValues);
  const [submitState, setSubmitState] = useState<SumbitState>({
    status: "ready",
    empty: [],
  });

  const onHandleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSignUp = (setAuthModalOpen: SetStateAction<any>) => {
    //1. find empty
    let empty = [];

    for (let input of Object.keys(values)) {
      if (!values[input]) {
        empty.push(input);
      }
    }

    if (empty.length) {
      setSubmitState({ status: "reject", empty });
      return;
    }

    //2. submit process
    try {
      dispatch(signup(values as DataProps));

      setAuthModalOpen({ open: true, type: "mailbox" });
    } catch (err) {
      console.log(err, "from custom hook");
    }
  };

  return {
    values,
    onHandleChange,
    onHandleSignUp,
    submitState,
  };
}

interface SumbitState {
  status: "ready" | "mailcheck" | "reject" | "success";
  empty: string[];
}
