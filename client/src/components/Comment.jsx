export default function Post({ data }) {
  return (
    <div>
      <p>
        <b>{data.user.username}</b>{" "}
        <span>{new Date(data.dateTime).toLocaleString()}</span>
      </p>
      <p>{data.content}</p>
    </div>
  );
}
