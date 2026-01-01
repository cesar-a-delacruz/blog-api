import { useRef, useState } from "react";
import Post from "@/components/Post";
import { useData } from "@/hooks/useData";
import sessionHandler from "@/utils/sessionHandler";
import requestHandler from "@/utils/requestHandler";
import dataFields from "./dataFields";
import DialogForm from "@/components/DialogForm";
import CustomForm from "@/components/CustomForm";
import { useTitle } from "@/hooks/useTitle";

export default function UserPosts() {
  const userData = sessionHandler.user();
  if (userData.role !== "AUTHOR") return <Navigate to={"/"} replace />;

  useTitle("My Posts");
  const { data } = useData("post?q=mine");

  const newDialog = useRef(null);
  const editDialog = useRef(null);

  const [editFields, setEditFields] = useState([]);

  const createAction = async (formData) => {
    formData.userId = userData.id;
    const errors = await requestHandler.post(formData, "post");
    console.log(errors);
    if (errors) return errors;
    location.replace("/post/mine");
  };
  const updateAction = async (formData) => {
    const errors = await requestHandler.put(formData, "post");
    console.log(errors);
    if (errors) return errors;
    location.replace("/post/mine");
  };

  return (
    <>
      <button
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
      <DialogForm ref={newDialog}>
        <CustomForm
          fields={dataFields.filter((field) => field.name !== "id")}
          actionText={"Create"}
          actionHandler={createAction}
        />
      </DialogForm>
      <DialogForm ref={editDialog}>
        <CustomForm
          fields={editFields}
          actionText={"Update"}
          actionHandler={updateAction}
        />
      </DialogForm>

      {data ? (
        <div>
          {data.map((item) => (
            <Post key={item.id} data={item} user={userData}>
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
                    location.replace("/post/mine");
                  }}
                >
                  Delete
                </button>
              </div>
            </Post>
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
