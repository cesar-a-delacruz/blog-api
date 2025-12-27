import { useCustomForm } from "@/hooks/useCustomForm";
import FormField from "./FormField";

export default function CustomForm({
  fields,
  initialData,
  fetchData = { endpoint: "", id: 0 },
  actionText,
  actionHandler,
}) {
  const formData = useCustomForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    actionHandler(formData);
  };

  return formData ? (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField key={field.name} data={field} value={formData[field.name]} />
      ))}
      <button type="submit">{actionText}</button>
    </form>
  ) : (
    <h3>Loading...</h3>
  );
}
