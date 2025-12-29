import requestInfo from "./requestInfo.js";
export default {
  get: async (path) => {
    const response = await fetch(`${requestInfo.origin}/${path}`, {
      headers: { Authorization: `Bearer ${requestInfo.token()}` },
    });

    const data = await response.json();
    if (response.ok) return data;
    return alert(data.error);
  },
  post: async (item, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
      body: new URLSearchParams(item),
    });

    const data = await response.json();
    if (response.ok) return alert(data.message);
    else if (response.status === 500) return alert(data.error);
    return Object.keys(data).reduce((acc, error) => {
      acc[error] = data[error].msg;
      return acc;
    }, {});
  },
  put: async (item, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}/${item.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
      body: new URLSearchParams(item),
    });

    if (response.ok) return alert("Item updated sucesfully");

    const data = await response.json();
    if (response.status === 500) return alert(data.error);
    return Object.keys(data).reduce((acc, error) => {
      acc[error] = data[error].msg;
      return acc;
    }, {});
  },
  delete: async (id, path) => {
    const response = await fetch(`${requestInfo.origin}/${path}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${requestInfo.token()}`,
      },
    });

    if (response.ok) return alert("Item deleted sucesfully");
    const data = await response.json();
    return alert(data.error);
  },
};
