import { useState } from "react";
export function useFormField(fieldName, initialValue, initialDisabled) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    name: fieldName,
    id: fieldName,
    value: value,
    disabled: initialDisabled,
    onChange: handleChange,
  };
}
