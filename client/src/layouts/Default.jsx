import { Outlet } from "react-router-dom";

export default function Default({ title }) {
  document.title = "Blog API: " + title;
  return (
    <>
      <header>
        <h1>Blog API</h1>
        <div className="options">
          <button onClick={() => location.replace("/auth")}>Login</button>
          <button onClick={() => location.replace("/user/new")}>
            Register
          </button>
        </div>
      </header>
      <main>
        <h2>{title}</h2>
        <Outlet />
      </main>
      <footer>
        Developed by{" "}
        <a href="https://github.com/cesar-a-delacruz">César De La Cruz</a>{" "}
        &copy;2025
      </footer>
    </>
  );
}
