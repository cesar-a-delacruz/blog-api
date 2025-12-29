import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import Post from "@/components/Post";
import { useData } from "@/hooks/useData";

export default function Index() {
  const setTitle = useOutletContext();
  useEffect(() => setTitle(["Blog API", "Home"]), []);
  const { id } = useParams();
  const { data } = useData(`post/${id}`);

  return data ? (
    <div>
      <Post key={data.id} data={data} />
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}
