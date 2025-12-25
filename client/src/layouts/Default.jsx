import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import requestInfo from "@/utils/requestInfo";

export default function Default() {
  const token = requestInfo.token();
  if (token) return <Navigate to={"/profile"} replace />;

  const [title, setTitle] = useState([]);
  document.title = title.join(": ");

  return (
    <>
      <header>
        <h1>{title[0]}</h1>
        <div className="options">
          <button onClick={() => location.replace("/")}>Login</button>
          <button onClick={() => location.replace("/register")}>
            Register
          </button>
        </div>
      </header>
      <main>
        <h2>{title[1]}</h2>
        <Outlet context={setTitle} />
      </main>
      <footer>
        Developed by{" "}
        <a href="https://github.com/cesar-a-delacruz">César De La Cruz</a>{" "}
        &copy;2025
      </footer>
    </>
  );
}
