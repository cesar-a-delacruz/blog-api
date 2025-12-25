import { useOutletContext } from "react-router-dom";
import dataFields from "./dataFields";
import CustomForm from "@/components/CustomForm";

export default function New() {
  const setTitle = useOutletContext();
  setTitle(["Blog API", "Register"]);

  return <CustomForm fields={dataFields} actionText={"Create Account"} />;
}
