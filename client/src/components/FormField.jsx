export default function FormField({ data }) {
  let input;
  switch (data.type) {
    case "select":
      input = (
        <select name={data.name} id={data.name}>
          {data.options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      );
      break;
    default:
      input = <input type={data.type} name={data.name} id={data.name} />;
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
