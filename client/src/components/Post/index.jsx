import "./post.css";
export default function Post({ data, children }) {
  return (
    <div className="component post">
      <div className="top">
        <h3>
          <a href={`/post/${data.id}`}>{data.title}</a>{" "}
          <span>{new Date(data.date).toLocaleDateString()}</span>
        </h3>
        {children}
      </div>
      <div className="bottom">
        <p>{data.description}</p>
        {data.media && <img src={data.media} />}
      </div>
    </div>
  );
}
