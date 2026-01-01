export default function FormField({
  data,
  value,
  disabled,
  onChange,
  children,
}) {
  let input;

  switch (data.type) {
    case "select":
      input = (
        <select
          name={data.name}
          id={data.name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        >
          {data.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    case "file":
      input = [
        <input
          key={0}
          type={data.type}
          name={data.name}
          id={data.name}
          disabled={disabled}
          onChange={onChange}
        />,
        value && (
          <>
            <br />
            <img key={1} src={value} alt={data.name} />
          </>
        ),
      ];
      break;
    default:
      input = (
        <input
          type={data.type}
          name={data.name}
          id={data.name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      );
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
      {children}
      <br />
    </>
  );
}
