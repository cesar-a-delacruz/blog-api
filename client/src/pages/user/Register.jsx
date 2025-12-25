import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import { useEffect } from "react";
import requestHandler from "@/utils/requestHandler";

export default function Register() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Register"]), []);

  const handleAction = async (formData) => {
    await requestHandler.post(formData, "user");
    location.replace("/");
  };

  return (
    <CustomForm
      fields={dataFields}
      actionText={"Create Account"}
      actionHandler={handleAction}
    />
  );
}
