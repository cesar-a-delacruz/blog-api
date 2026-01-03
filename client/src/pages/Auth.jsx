import dataFields from "./user/dataFields";
import CustomForm from "@/components/CustomForm";
import sessionHandler from "@/utils/sessionHandler";
import { useTitle } from "@/hooks/useTitle";

export default function Auth() {
  useTitle("Login");

  const handleAction = async (formData) => {
    await sessionHandler.login(formData);
    location.replace("/profile");
  };

  return (
    <CustomForm
      fields={dataFields.filter(
        (field) => field.name !== "role" && field.name !== "id"
      )}
      actionText={"Enter"}
      actionHandler={handleAction}
    />
  );
}
