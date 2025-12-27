import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect, useState } from "react";
import requestHandler from "@/utils/requestHandler";
import { jwtDecode } from "jwt-decode";
import requestInfo from "@/utils/requestInfo";

export default function Profile() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Profile"]), []);

  const [viewMode, seViewMode] = useState(true);
  const userData = jwtDecode(requestInfo.token());

  const handleAction = (formData) => {
    requestHandler.put(formData, "user");
  };
  const handleDisabled = () => {
    seViewMode(!viewMode);
  };

  return (
    <>
      <CustomForm
        fields={
          viewMode
            ? dataFields.filter((field) => field.name !== "password")
            : dataFields
        }
        initialData={{
          id: userData.id,
          username: userData.username,
          role: userData.role,
        }}
        actionText={"Save Changes"}
        actionHandler={handleAction}
        disabled={viewMode}
      />
      <div className="options">
        <button
          className="edit"
          style={{ display: viewMode ? "initial" : "none" }}
          onClick={handleDisabled}
        >
          Edit
        </button>
        <button
          className="cancel"
          style={{ display: viewMode ? "none" : "initial" }}
          onClick={handleDisabled}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
