export default function FormField({ data, value, handleChange }) {
  let input;
  switch (data.type) {
    case "select":
      input = (
        <select
          name={data.name}
          id={data.name}
          value={value}
          onChange={handleChange}
        >
          {data.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = (
        <input
          type={data.type}
          name={data.name}
          id={data.name}
          value={value}
          onChange={handleChange}
        />
      );
  }
  return (
    <>
      <label htmlFor={data.name}>{data.label}</label>
      <br />
      {input}
      <br />
    </>
  );
}
