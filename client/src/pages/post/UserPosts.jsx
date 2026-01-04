import { useRef, useState } from "react";
import Post from "@/components/Post";
import { useData } from "@/hooks/useData";
import sessionHandler from "@/utils/sessionHandler";
import requestHandler from "@/utils/requestHandler";
import dataFields from "./dataFields";
import CustomDialog from "@/components/CustomDialog";
import CustomForm from "@/components/CustomForm";
import { useTitle } from "@/hooks/useTitle";
import "../../styles/page.css";

export default function UserPosts() {
  const userData = sessionHandler.user();
  if (userData.role !== "AUTHOR") return <Navigate to={"/"} replace />;

  useTitle("My Posts");
  const { data, setData, noData } = useData("post?q=mine");

  const newDialog = useRef(null);
  const editDialog = useRef(null);

  const [editFields, setEditFields] = useState([]);

  const createAction = async (formData) => {
    formData.userId = userData.id;
    const errors = await requestHandler.postFile(formData, "post");
    if (errors) return errors;
    location.replace("/post/mine");
  };
  const updateAction = async (formData) => {
    const errors = await requestHandler.put(formData, "post");
    if (errors) return errors;

    setData((prev) =>
      prev.map((post) => {
        if (post.id === formData.id) {
          for (const key in post) {
            post[key] = formData[key] || post[key];
          }
        }
        return post;
      })
    );
  };

  return (
    <>
      <button
        className="add"
        onClick={() => {
          setEditFields(
            dataFields.map((field) => {
              const newField = field;
              newField.default = newField.options
                ? newField.options[0].value
                : undefined;
              return newField;
            })
          );
          newDialog.current.open = true;
        }}
      >
        New Post
      </button>
      <CustomDialog ref={newDialog}>
        <CustomForm
          fields={dataFields.filter((field) => field.name !== "id")}
          actionText={"Create"}
          actionHandler={createAction}
        />
      </CustomDialog>
      <CustomDialog ref={editDialog}>
        <CustomForm
          fields={editFields}
          actionText={"Update"}
          actionHandler={updateAction}
        />
      </CustomDialog>

      {data ? (
        <div>
          {data.map((item) => (
            <Post key={item.id} data={item}>
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
                      "Are you sure you wan't to delete this post?"
                    );
                    if (!question) return;

                    await requestHandler.delete(item.id, "post");
                    setData((prev) =>
                      prev.filter((post) => post.id !== item.id)
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            </Post>
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
