import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect } from "react";
import requestHandler from "@/utils/requestHandler";

export default function Profile() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Profile"]), []);

  const handleAction = (formData) => {
    requestHandler.post(formData, "user");
  };

  return (
    <CustomForm
      fields={dataFields}
      actionText={"Save Changes"}
      actionHandler={handleAction}
    />
  );
}
