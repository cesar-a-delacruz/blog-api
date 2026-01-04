import "./comment.css";
export default function Post({ data, children }) {
  return (
    <div className="comment">
      <div className="top">
        {children}
        <span>{new Date(data.dateTime).toLocaleString()}</span>
      </div>
      <p>{data.content}</p>
    </div>
  );
}
