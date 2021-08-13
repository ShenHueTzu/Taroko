import { host } from "../config";

export const getList = () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };
  
  return fetch(`${host}/api/contacts`, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.warn(error));
};
export const getContact = (id) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  };

return fetch(`${host}/api/contacts/${id}`, options)
  .then((res) => res.json())
  .then((res) => res)
  .catch((error) => console.warn(error));
};

export const postList = (data) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

return fetch(`${host}/api/contacts`, options)
  .then((res) => res.json())
  .then((res) => res)
  .catch((error) => console.warn(error));
};

export const putList = (data) => {
  const { id } = data;
  delete data.id;
  const options = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

return fetch(`${host}/api/contacts/${id}`, options)
  .then((res) => res.json())
  .then((res) => res)
  .catch((error) => console.warn(error));
};

export const delList = (id) => {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  };

return fetch(`${host}/api/contacts/${id}`, options)
  .then((res) => res.json())
  .then((res) => res)
  .catch((error) => console.warn(error));
};
