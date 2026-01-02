import { useParams } from "react-router-dom";
import Post from "@/components/Post";
import Comment from "@/components/Comment";
import { useData } from "@/hooks/useData";
import { useTitle } from "@/hooks/useTitle";

export default function Index() {
  useTitle("Profile");
  const { id } = useParams();
  const { data } = useData(`post/${id}`);

  return data ? (
    <div>
      <Post key={data.id} data={data} />
      {data.comments.map((comment) => (
        <Comment key={comment.id} data={comment}>
          <b>{comment.user.username}</b>{" "}
        </Comment>
      ))}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}
