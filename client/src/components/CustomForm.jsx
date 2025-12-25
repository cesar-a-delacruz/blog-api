import FormField from "./FormField";
import { useEffect, useState } from "react";

export default function CustomForm({ fields, actionText, actionHandler }) {
  const [formData, setFormData] = useState({});
  useEffect(
    () =>
      setFormData(
        fields.reduce((acc, field) => {
          acc[field.name] = "";
          return acc;
        }, {})
      ),
    []
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    actionHandler(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          data={field}
          value={formData[field.name] || ""}
          handleChange={handleChange}
        />
      ))}
      <button type="submit">{actionText}</button>
    </form>
  );
}
