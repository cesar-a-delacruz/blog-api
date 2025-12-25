import { useOutletContext } from "react-router-dom";

export default function Auth() {
  const setTitle = useOutletContext();
  setTitle(["Blog API", "Login"]);
}
