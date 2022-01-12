import { useState, useCallback } from "react";

export function useForm(initialValues: any) {
  const [values, setValues] = useState<{ [key: string]: any }>(initialValues);

  const onHandleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return {
    values,
    onHandleChange,
  };
}
