export default function Post({ data, children }) {
  return (
    <div>
      <div className="top">
        <h3>
          <a href={`/post/${data.id}`}>{data.title}</a>{" "}
          <span>{new Date(data.date).toLocaleDateString()}</span>
        </h3>
        {children}
      </div>
      <p>{data.description}</p>
      {data.media && <img src={data.media} />}
    </div>
  );
}
