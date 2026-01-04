import Post from "@/components/Post";
import { useData } from "@/hooks/useData";
import { useTitle } from "@/hooks/useTitle";

export default function Index() {
  useTitle("Home");
  const { data, noData } = useData("post");

  return data ? (
    <div>
      {data.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  ) : noData ? (
    <h3>{noData}</h3>
  ) : (
    <h3>Loading...</h3>
  );
}
