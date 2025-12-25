import requestInfo from "./requestInfo.js";
export default {
  login: async (data, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}`, {
      method: "POST",
      body: new URLSearchParams(data),
    });

    if (!response.ok) return console.log(response);
    const json = await response.json();
    localStorage.setItem("jwt", json.token);
  },
  logout: () => {
    localStorage.removeItem("jwt");
    location.replace("/auth");
  },
};
