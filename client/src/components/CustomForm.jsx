import FormField from "./FormField";
import { useEffect, useState } from "react";

export default function CustomForm({
  fields,
  actionText,
  actionHandler,
  disabled,
}) {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setFormData(
      fields.reduce((acc, field) => {
        acc[field.name] = field.default || "";
        return acc;
      }, {})
    );
  }, [fields]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await actionHandler(formData);
    if (errors) setErrors(errors);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return formData ? (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          data={field}
          value={formData[field.name]}
          disabled={disabled}
          onChange={handleChange}
        >
          {errors[field.name] && <span>{errors[field.name]}</span>}
        </FormField>
      ))}
      <button type="submit" style={{ display: disabled ? "none" : "initial" }}>
        {actionText}
      </button>
    </form>
  ) : (
    <h3>Loading...</h3>
  );
}
