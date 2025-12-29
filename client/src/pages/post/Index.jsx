import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Post from "@/components/Post";
import { useData } from "@/hooks/useData";

export default function Index() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Home"]), []);
  const { data } = useData("post");

  return data ? (
    <div>
      {data.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}
