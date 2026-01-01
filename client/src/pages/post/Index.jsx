import Post from "@/components/Post";
import { useData } from "@/hooks/useData";
import { useTitle } from "@/hooks/useTitle";

export default function Index() {
  useTitle("Home");
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
