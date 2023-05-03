import http from "../http-common";

const getAll = (params) => {
  return http.get("/testtable", { params });
};

const get = (id) => {
  return http.get(`/testtable/${id}`);
};

const create = (data) => {
  return http.post("/testtable", data);
};

const update = (id, data) => {
  return http.put(`/testtable/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/testtable/${id}`);
};

const removeAll = () => {
  return http.delete(`/testtable`);
};

const findByTitle = (title) => {
  return http.get(`/testtable?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
