export default function Post({ data, children }) {
  return (
    <div>
      <div>
        {children}
        <span>{new Date(data.dateTime).toLocaleString()}</span>
      </div>
      <p>{data.content}</p>
    </div>
  );
}
