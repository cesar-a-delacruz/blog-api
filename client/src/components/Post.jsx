export default function Post({ data }) {
  return (
    <div>
      <h3>
        <a href={`/post/${data.id}`}>{data.title}</a>{" "}
        <span>{new Date(data.date).toLocaleDateString()}</span>
      </h3>
      <p>{data.description}</p>
      {data.media && <img src={data.media} />}
    </div>
  );
}
