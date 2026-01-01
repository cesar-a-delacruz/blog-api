import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";
import requestHandler from "@/utils/requestHandler";
import { useTitle } from "@/hooks/useTitle";

export default function Register() {
  useTitle("Register");

  const handleAction = async (formData) => {
    const errors = await requestHandler.post(formData, "user");
    if (errors) return errors;
    location.replace("/");
  };

  return (
    <CustomForm
      fields={dataFields.filter((field) => field.name !== "id")}
      actionText={"Create Account"}
      actionHandler={handleAction}
    />
  );
}
