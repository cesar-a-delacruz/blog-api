import { useOutletContext } from "react-router-dom";

export default function New() {
  const setTitle = useOutletContext();
  setTitle(["Blog API", "Register"]);
}
