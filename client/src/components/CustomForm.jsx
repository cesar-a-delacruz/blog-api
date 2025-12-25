import FormField from "./FormField";
export default function CustomForm({ fields, actionText }) {
  return (
    <form action="">
      {fields.map((field) => (
        <FormField data={field} />
      ))}
      <button>{actionText}</button>
    </form>
  );
}
