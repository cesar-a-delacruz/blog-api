import { useEffect, useState } from "react";
import requestHandler from "@/utils/requestHandler";

export function useData(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => setData(await requestHandler.get(endpoint)))();
  }, []);

  return { data, setData };
}
