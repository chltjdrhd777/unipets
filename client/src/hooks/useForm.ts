import { useState, useCallback } from "react";

export function useForm({ initialValues }: any) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    setValues,
  };
}
