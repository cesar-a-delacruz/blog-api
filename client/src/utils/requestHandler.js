import requestInfo from "./requestInfo.js";
export default {
  post: async (data, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
      body: new URLSearchParams(data),
    });

    if (!response.ok) return console.log(response);
    return await response.json();
  },
  getOne: async (id, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}/${id}`, {
      headers: { Authorization: `Bearer ${requestInfo.token()}` },
    });

    if (!response.ok) return console.log(response);
    return await response.json();
  },
  getAll: async (path) => {
    const response = await fetch(`${requestInfo.origin}/${path}`, {
      headers: { Authorization: `Bearer ${requestInfo.token()}` },
    });

    if (!response.ok) return console.log(response);
    return await response.json();
  },
  put: async (item, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}/${item.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
      body: new URLSearchParams(item),
    });

    if (!response.ok) return console.log(response);
    return await response.json();
  },
  delete: async (id, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
    });

    if (!response.ok) return console.log(response);
    return await response.json();
  },
};
