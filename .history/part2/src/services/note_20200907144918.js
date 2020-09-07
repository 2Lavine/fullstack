import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};
const create = (newObj) => {
  return axios.post(baseUrl, newObj);
};
const update = (id, newObj) => {
  return axios.put(`${baseUrl}/${id}`, newObj);
};

export default {
  getAll,
  create,
  update,
};
