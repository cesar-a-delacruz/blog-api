import { useRef, useState } from "react";
import Comment from "@/components/Comment";
import { useData } from "@/hooks/useData";
import sessionHandler from "@/utils/sessionHandler";
import requestHandler from "@/utils/requestHandler";
import dataFields from "./dataFields";
import CustomDialog from "@/components/CustomDialog";
import CustomForm from "@/components/CustomForm";
import { useTitle } from "@/hooks/useTitle";

export default function UserComments() {
  const userData = sessionHandler.user();
  if (userData.role !== "READER") return <Navigate to={"/"} replace />;

  useTitle("My Comments");
  const { data, setData, noData } = useData("comment");

  const editDialog = useRef(null);
  const [editFields, setEditFields] = useState([]);

  const updateAction = async (formData) => {
    const errors = await requestHandler.put(formData, "comment");
    if (errors) return errors;

    setData((prev) =>
      prev.map((comment) => {
        if (comment.id === formData.id) {
          for (const key in comment) {
            comment[key] = formData[key] || comment[key];
          }
        }
        return comment;
      })
    );
  };
  return (
    <>
      <CustomDialog ref={editDialog}>
        <CustomForm
          fields={editFields.filter((field) => field.name !== "postId")}
          actionText={"Update"}
          actionHandler={updateAction}
        />
      </CustomDialog>

      {data ? (
        <div>
          {data.map((item) => (
            <Comment key={item.id} data={item}>
              <div className="top">
                <a href={`/post/${item.post.id}`}>{item.post.title}</a>{" "}
                <div className="options">
                  <button
                    onClick={() => {
                      setEditFields(
                        dataFields.map((field) => {
                          const newField = field;
                          newField.default = item[field.name];
                          return newField;
                        })
                      );
                      editDialog.current.open = true;
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      const question = confirm(
                        "Are you sure you wan't to delete this comment?"
                      );
                      if (!question) return;

                      await requestHandler.delete(item.id, "comment");
                      setData((prev) =>
                        prev.filter((comment) => comment.id !== item.id)
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Comment>
          ))}
        </div>
      ) : !noData && !data ? (
        <h3>Loading...</h3>
      ) : (
        <h3>{noData}</h3>
      )}
    </>
  );
}
