
export const BASE_URL = "https://63bedcf7f5cfc0949b634fc8.mockapi.io";

const createUrl = (base, path) => `${base}${path}`;

export const getUsers = () => [
  createUrl(BASE_URL, "/users")
];