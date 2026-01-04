import { useEffect, useState } from "react";
import requestHandler from "@/utils/requestHandler";

export function useData(endpoint) {
  const [data, setData] = useState(null);
  const [noData, setNoData] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedData = await requestHandler.get(endpoint);
      if (
        fetchedData.length ||
        (typeof fetchedData === "object" &&
          !Array.isArray(fetchedData) &&
          fetchedData !== null)
      )
        setData(fetchedData);
      else setNoData("No Data Available yet.");
    })();
  }, []);

  return { data, setData, noData };
}
