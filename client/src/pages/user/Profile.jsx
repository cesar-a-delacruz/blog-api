import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect, useState } from "react";
import requestHandler from "@/utils/requestHandler";
import { jwtDecode } from "jwt-decode";
import requestInfo from "@/utils/requestInfo";
import sessionHandler from "@/utils/sessionHandler";

export default function Profile() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Profile"]), []);

  const [viewMode, setViewMode] = useState(true);

  const userData = jwtDecode(requestInfo.token());
  let newDataFields = dataFields.map((field) => {
    if (userData[field.name]) field.default = userData[field.name];
    return field;
  });

  const handleAction = async (formData) => {
    await requestHandler.put(formData, "user");
    await sessionHandler.refresh(userData.id);
    location.reload();
  };
  const handleDisabled = () => {
    setViewMode(!viewMode);
  };

  return (
    <>
      <CustomForm
        fields={
          viewMode
            ? newDataFields.filter((field) => field.name !== "password")
            : newDataFields
        }
        actionText={"Save Changes"}
        actionHandler={handleAction}
        disabled={viewMode}
      />
      <div className="options">
        <button
          style={{ display: viewMode ? "initial" : "none" }}
          onClick={handleDisabled}
        >
          Edit
        </button>
        <button
          style={{ display: viewMode ? "initial" : "none" }}
          onClick={async (e) => {
            const question = confirm(
              "Are you sure you wan't to delete your account?"
            );
            if (!question) return;
            await requestHandler.delete(userData.id, "user");
            sessionHandler.logout();
          }}
        >
          Delete
        </button>
        <button
          style={{ display: viewMode ? "none" : "initial" }}
          onClick={handleDisabled}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
