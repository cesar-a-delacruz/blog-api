import { useParams } from "react-router-dom";
import Post from "@/components/Post";
import Comment from "@/components/Comment";
import { useData } from "@/hooks/useData";
import { useTitle } from "@/hooks/useTitle";
import sessionHandler from "@/utils/sessionHandler";
import dataFields from "../comment/dataFields";
import CustomDialog from "@/components/CustomDialog";
import CustomForm from "@/components/CustomForm";
import { useRef } from "react";
import requestHandler from "@/utils/requestHandler";

export default function View() {
  useTitle("Post");
  const { id } = useParams();
  const { data } = useData(`post/${id}`);

  const newDialog = useRef(null);
  const userData = sessionHandler.user();

  const createAction = async (formData) => {
    formData.postId = id;
    formData.userId = userData.id;
    const errors = await requestHandler.post(formData, "comment");
    if (errors) return errors;
    location.replace(`/post/${id}`);
  };

  return data ? (
    <div>
      <Post key={data.id} data={data} />
      {userData.role === "READER" && (
        <>
          <button onClick={() => (newDialog.current.open = true)}>
            Add Comment
          </button>
          <CustomDialog ref={newDialog}>
            <CustomForm
              fields={dataFields}
              actionText={"Comment"}
              actionHandler={createAction}
            />
          </CustomDialog>
        </>
      )}
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
