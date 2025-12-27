import { useCustomForm } from "@/hooks/useCustomForm";
import FormField from "./FormField";

export default function CustomForm({
  fields,
  fetchData = { endpoint: "", id: 0 },
  actionText,
  actionHandler,
  disabled,
}) {
  const { formData, setFormData } = useCustomForm(fields);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionHandler(formData);
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
        />
      ))}
      <button type="submit" style={{ display: disabled ? "none" : "initial" }}>
        {actionText}
      </button>
    </form>
  ) : (
    <h3>Loading...</h3>
  );
}
