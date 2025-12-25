import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Default() {
  const [title, setTitle] = useState([]);
  document.title = title.join(": ");
  return (
    <>
      <header>
        <h1>{title[0]}</h1>
        <div className="options">
          <button onClick={() => location.replace("/auth")}>Login</button>
          <button onClick={() => location.replace("/user/new")}>
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
