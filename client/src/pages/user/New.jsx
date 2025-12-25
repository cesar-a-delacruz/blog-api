import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect } from "react";
import requestHandler from "@/utils/requestHandler";

export default function New() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Register"]), []);

  const handleAction = (formData) => {
    requestHandler.post(formData, "user");
  };

  return (
    <CustomForm
      fields={dataFields}
      actionText={"Create Account"}
      actionHandler={handleAction}
    />
  );
}
