import { useFormField } from "@/hooks/useFormField";
export default function FormField({ data, value }) {
  const fieldAttributes = useFormField(data.name, value);
  let input;

  switch (data.type) {
    case "select":
      input = (
        <select {...fieldAttributes}>
          {data.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = <input type={data.type} {...fieldAttributes} />;
  }

  return (
    <>
      {data.label && (
        <>
          <label htmlFor={data.name}>{data.label}</label>
          <br />
        </>
      )}
      {input}
      <br />
    </>
  );
}
