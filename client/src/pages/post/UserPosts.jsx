import { useOutletContext } from "react-router-dom";
import { useEffect, useRef } from "react";
import Post from "@/components/Post";
import { useData } from "@/hooks/useData";
import sessionHandler from "@/utils/sessionHandler";
import dataFields from "./dataFields";
import DialogForm from "@/components/DialogForm";
import CustomForm from "@/components/CustomForm";

export default function UserPosts() {
  const userData = sessionHandler.user();
  if (userData.role !== "AUTHOR") return <Navigate to={"/"} replace />;

  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Home"]), []);

  const { data } = useData("post?q=mine");
  const newDialog = useRef(null);

  return (
    <>
      <button onClick={() => (newDialog.current.open = true)}>New Post</button>
      <DialogForm ref={newDialog}>
        <CustomForm fields={dataFields} actionText={"Create"} />
      </DialogForm>

      {data ? (
        <div>
          {data.map((item) => (
            <Post key={item.id} data={item} user={userData}>
              <div className="options">
                <button>Edit</button>
                <button>Delete</button>
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
