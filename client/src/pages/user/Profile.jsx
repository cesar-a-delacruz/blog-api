import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect } from "react";
import requestHandler from "@/utils/requestHandler";
import { jwtDecode } from "jwt-decode";
import requestInfo from "@/utils/requestInfo";

export default function Profile() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Profile"]), []);
  const userData = jwtDecode(requestInfo.token());

  const handleAction = (formData) => {
    requestHandler.put(formData, "user");
  };

  return (
    <CustomForm
      fields={dataFields}
      initialData={{
        id: userData.id,
        username: userData.username,
        role: userData.role,
      }}
      actionText={"Save Changes"}
      actionHandler={handleAction}
    />
  );
}
