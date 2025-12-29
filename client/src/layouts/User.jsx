import { Outlet, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import sessionHandler from "@/utils/sessionHandler";

export default function User() {
  const userData = sessionHandler.user();
  if (!userData) return <Navigate to={"/"} replace />;

  const [title, setTitle] = useState([]);
  document.title = title.join(": ");

  return (
    <>
      <header>
        <h1>{title[0]}</h1>
        <nav>
          <NavLink to={"/post"}>Home</NavLink>
          {userData.role === "AUTHOR" ? (
            <NavLink to={"/post/mine"}>My Posts</NavLink>
          ) : (
            <NavLink to={"/comment/mine"}>My Comments</NavLink>
          )}
          <NavLink to={"/user/me"}>Profile</NavLink>
        </nav>
        <div className="options">
          <button onClick={() => sessionHandler.logout()}>Logout</button>
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
