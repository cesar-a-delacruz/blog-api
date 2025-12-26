import { useState } from "react";
export function useFormField(fieldName, initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    name: fieldName,
    id: fieldName,
    value: value,
    onChange: handleChange,
  };
}
