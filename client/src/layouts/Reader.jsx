import { Outlet, NavLink } from "react-router-dom";

export default function Reader({ title }) {
  document.title = "Blog API: " + title;
  return (
    <>
      <header>
        <h1>Blog API</h1>
        <nav>
          <NavLink to={"/post"}>Posts</NavLink>
          <NavLink to={"/comment/mine"}>My Comments</NavLink>
          <NavLink to={"/user/me"}>Profile</NavLink>
        </nav>
        <div className="options">
          <button onClick={() => location.replace("/auth")}>Logout</button>
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
