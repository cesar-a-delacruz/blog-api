import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export function useTitle(title) {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", title]), []);
}
