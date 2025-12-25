import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect } from "react";
import sessionHandler from "@/utils/sessionHandler";

export default function Auth() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Login"]), []);

  const handleAction = (formData) => {
    sessionHandler.login(formData, "auth");
  };

  return (
    <CustomForm
      fields={dataFields.filter((field) => field.name !== "role")}
      actionText={"Enter"}
      actionHandler={handleAction}
    />
  );
}
