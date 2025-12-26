import { useEffect, useState } from "react";
import requestHandler from "@/utils/requestHandler";

export function useCustomForm(fields, endpoint, id) {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (endpoint && id) {
      (async () => setFormData(await requestHandler.getOne(id, endpoint)))();
    } else {
      setFormData(
        fields.reduce((acc, field) => {
          acc[field.name] = "";
          return acc;
        }, {})
      );
    }
  }, []);

  return formData;
}
