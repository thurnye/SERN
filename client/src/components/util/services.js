import http from './http-commons';

class StuffDataService {
  findAll() {
    return http.get("/");
  }

  findByPk(id) {
    return http.get(`/api/${id}`);
  }

  // update(data) {
  //   return http.post("/api", data);
  // }

  findOne(id) {
    return http.get(`/edit/${id}`);
  }

  post(id, data) {
    return http.post(`/edit/${id}`, data);
  }

  destroy(id) {
    return http.delete(`/api/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/api`);
  // }

  // findByTitle(title) {
  //   return http.get(`/api?title=${title}`);
  // }
}

export default new StuffDataService();