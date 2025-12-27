import requestInfo from "./requestInfo.js";
export default {
  login: async (credentials) => {
    const response = await fetch(`${requestInfo.origin}/auth`, {
      method: "POST",
      body: new URLSearchParams(credentials),
    });

    const data = await response.json();
    if (!response.ok) return alert(data.error);
    localStorage.setItem("jwt", data.token);
  },
  logout: () => {
    localStorage.removeItem("jwt");
    location.replace("/");
  },
  refresh: async (id) => {
    const response = await fetch(`${requestInfo.origin}/refresh/${id}`);
    const data = await response.json();
    if (!response.ok) return alert(data.error);
    localStorage.setItem("jwt", data.token);
  },
};
