import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useState } from "react";
import requestHandler from "@/utils/requestHandler";
import sessionHandler from "@/utils/sessionHandler";
import { useTitle } from "@/hooks/useTitle";

export default function Profile() {
  useTitle("Profile");
  const [viewMode, setViewMode] = useState(true);

  const userData = sessionHandler.user();
  let newDataFields = dataFields.map((field) => {
    if (userData[field.name]) field.default = userData[field.name];
    return field;
  });

  const handleAction = async (formData) => {
    const errors = await requestHandler.put(formData, "user");
    if (errors) return errors;
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
