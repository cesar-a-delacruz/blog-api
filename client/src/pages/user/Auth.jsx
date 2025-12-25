import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";

export default function Auth() {
  const setTitle = useOutletContext();
  setTitle(["Blog API", "Login"]);

  return (
    <CustomForm
      fields={dataFields.filter((field) => field.name !== "role")}
      actionText={"Enter"}
    />
  );
}
