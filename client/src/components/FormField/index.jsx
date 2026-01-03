import "./form-field.css";
export default function FormField({
  data,
  value,
  disabled,
  onChange,
  children,
}) {
  let input;

  const handleChange = (e) => {
    onChange((prev) => {
      const newData = { ...prev, [e.target.name]: e.target.value };
      if (e.target.files) {
        newData.file = e.target.files[0];
        document.querySelector("img." + data.name).src = URL.createObjectURL(
          newData.file
        );
      }
      return newData;
    });
  };

  switch (data.type) {
    case "select":
      input = (
        <select
          name={data.name}
          id={data.name}
          value={value}
          disabled={disabled}
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
    case "file":
      input = [
        <input
          key={0}
          type={data.type}
          name={data.name}
          id={data.name}
          disabled={disabled}
          onChange={handleChange}
        />,
        <img
          key={1}
          src={value && value.startsWith("https") ? value : null}
          alt={data.name}
          className={data.name}
          style={{ display: value ? "initial" : "none" }}
        />,
      ];
      break;
    case "textarea":
      input = (
        <textarea
          type={data.type}
          name={data.name}
          id={data.name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
      );
      break;
    default:
      input = (
        <input
          type={data.type}
          name={data.name}
          id={data.name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
      );
  }

  return (
    <div className="field">
      {data.label && (
        <>
          <label htmlFor={data.name}>{data.label}</label>
          <br />
        </>
      )}
      {input}
      <br />
      {children}
    </div>
  );
}
